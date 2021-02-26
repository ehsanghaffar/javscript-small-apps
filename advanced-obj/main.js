// This keyword
const robot = {
  model: 'B-4MI',
  mobile: true,
  greeting() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

// Arrow function DONT return THIS keyword
const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greeting() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)


// Private methods
const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
  // setter method 
  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}


/// Another example of setter and getter methods
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },

  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num
    }
    else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
  
};
robot.numOfSensors = 100
console.log(robot.numOfSensors)


// factory function example
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
}

const tinCan = robotFactory('P-500', true)

tinCan.beep()



// Destructured Assignment
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot; // we can access to robot.functionality

functionality.beep()


// Built-in Object Methods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot without change robot
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)
console.log(newRobot);