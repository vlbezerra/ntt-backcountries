import { getDestination } from '@sap-cloud-sdk/connectivity';

export const destination = getDestination({
    destinationName: 'countries-destination',
})
    .then((destination) => {
        return destination;
    })
    .catch((err) => {
        return err;
    });
