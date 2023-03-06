import { Injectable } from '@nestjs/common';
import cds from '@sap/cds';

@Injectable()
export class LogService {
  async log(data: string, user: string) {
    const db = await cds.connect.to('db');
    const {Logs} = db.entities('countriesDb');
    return await db.run(INSERT.into(Logs).entries({ path: data, createdBy: user, modifiedBy: user }));
  }
}
