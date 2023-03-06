export namespace countriesDb {
    export interface Logs {
        ID: string;
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        path: string;
    }

    export enum Entity {
        Logs = 'countriesDb.Logs',
    }

    export enum SanitizedEntity {
        Logs = 'Logs',
    }
}

export namespace sap.common {
    export interface Languages {
        name: string;
        descr: string;
        code: string;
        texts: Texts[];
        localized?: Texts;
    }

    export interface Countries {
        name: string;
        descr: string;
        code: string;
        texts: Texts[];
        localized?: Texts;
    }

    export interface Currencies {
        name: string;
        descr: string;
        code: string;
        symbol: string;
        texts: Texts[];
        localized?: Texts;
    }

    export interface Texts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export interface Texts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export interface Texts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export enum Entity {
        Languages = 'sap.common.Languages',
        Countries = 'sap.common.Countries',
        Currencies = 'sap.common.Currencies',
        Texts = 'sap.common.Currencies.texts',
    }

    export enum SanitizedEntity {
        Languages = 'Languages',
        Countries = 'Countries',
        Currencies = 'Currencies',
        Texts = 'Texts',
    }
}

export namespace CountriesService {
    export interface Logs {
        ID: string;
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        path: string;
    }

    export enum Entity {
        Logs = 'CountriesService.Logs',
    }

    export enum SanitizedEntity {
        Logs = 'Logs',
    }
}

export type User = string;

export enum Entity {}

export enum SanitizedEntity {}
