using {
    managed,
    cuid
} from '@sap/cds/common';

namespace countriesDb;

entity Logs: cuid, managed {
    path: String(200);
}
