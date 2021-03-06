let ElectricLamp = function () {
    this.setStatusLamp = function () {
        this.setStatusLamp = true;
    };
    this.getStatusLamp = function () {
        return this.setStatusLamp;
    };
    this.turnOffLamp = function () {
        return this.setStatusLamp = true;
    };
    this.turnOnLamp = function () {
        return this.setStatusLamp = false;
    };
}
let SwitchLamp = function () {
    this.time = 0;

    this.setElectric = function (electricLamp) {
        this.electric = electricLamp;
    };
    this.onOff = function () {
        if (this.electric.getStatusLamp())
            document.write('Switch of Lamp is off, the time of switch off: '+ this.time +'<br>');
        else document.write('Switch of Lamp is on, the time switch on: '+ this.time+'<br>');
    };
    this.switchOff = function () {
        return this.electric.turnOffLamp();
    };
    this.switchOn = function () {
        this.time ++;
        return this.electric.turnOnLamp();
    };
}
let electricLamp = new ElectricLamp();
let switchLamp = new SwitchLamp();
switchLamp.setElectric(electricLamp);

for (let i = 0;i < 10;i++){
    switchLamp.switchOn();
    switchLamp.onOff();
    switchLamp.switchOff();
    switchLamp.onOff();
}