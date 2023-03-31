(function exportPort() {
    class Port {
        constructor(Port) {
            this.name = Port;
            this.ships = [];
        }

        addShip(Ship) {
            this.ships.push(Ship);

        }

        removeShip(Ship) {
            const index = this.ships.indexOf(Ship);
            this.ships.splice(index, 1);

        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    }
}());
