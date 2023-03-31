const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

describe('itinerary of ship', () => {
    test('determines which port the ship docks', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    test('it has ports', () => {
        const leedsPort = new Port('Leeds');
        const greecePort = new Port('Greece');

        const itinerary = new Itinerary([leedsPort, greecePort]);

        expect(itinerary.ports).toEqual([leedsPort, greecePort]);
    });
});