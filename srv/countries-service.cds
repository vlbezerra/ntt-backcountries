using {countriesDb as db} from '../db/countriesdb';

service CountriesService @(requires : 'authenticated-user') {
    entity Logs as projection on db.Logs;
}
