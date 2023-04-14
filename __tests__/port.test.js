const Port = require('../src/port.js');

describe('Port', () => {
    describe('with ports and ships', () => {
        let port;
        let leedsPort;
        let ships;
        let harkanShip;
        let emmaShip;

        beforeEach(() => {
            port = new Port('myPort');
            leedsPort = new Port('Leeds');
            ships = jest.fn();
            harkanShip = jest.fn();
            emmaShip = jest.fn();
        });


        test('creating a port', () => {

            expect(new Port()).toBeInstanceOf(Object);
        })

        test('find the name of a port', () => {

            expect(leedsPort.name).toEqual('Leeds');
        })

        test('adds ships to the port', () => {

            port.addShip(emmaShip);
            port.addShip(harkanShip);

            expect(port.ships).toContain(emmaShip, harkanShip);
        })

        test('removes ships from the port', () => {

            port.addShip(emmaShip);
            port.addShip(harkanShip);

            port.removeShip(emmaShip);

            expect(port.ships).toEqual([harkanShip]);
        })
    });
});