import 'reflect-metadata';
import './config/module-alias';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createCombinedHandler } from 'cds-routing-handlers';
import cds from '@sap/cds';

export const application = async () => {
    const app = await NestFactory.create(AppModule);

    const xsenv = require('@sap/xsenv')
    const serviceBindings = xsenv.getServices({
        myXsuaa: {tag: 'xsuaa'}
    })
    const UAA_CREDENTIALS = serviceBindings.myXsuaa

    const express = require('express')
    const xssec = require('@sap/xssec')
    const passport = require('passport')
    const JWTStrategy = xssec.JWTStrategy
    passport.use('JWT', new JWTStrategy(UAA_CREDENTIALS))
    app.use(passport.initialize())
    app.use(passport.authenticate('JWT', {session: false}))
    app.use(express.json())

    app.enableCors();
    const hdl = createCombinedHandler({
        handler: [__dirname + '/services/**/*.js', __dirname + '/handlers/**/*.js'],
    });

    await cds.connect('db');
    await cds
        .serve('all')
        .at("odata")
        .in(app)
        .with((srv) => hdl(srv));

    return app;
};
