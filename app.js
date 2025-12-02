class Car {
  constructor(make, model, color) {
    this.make = make
    this.model = model
    this.color = color
    this.isRunning = false
  }
  start() {
    this.isRunning = true
    console.log('Running!')
  }
  stop() {
    this.isRunning = false
    console.log('Stopped!')
  }
  toString() {
    return `This car is a ${this.color} ${this.make} ${this.model}.`
  }
  static about() {
    console.log("I'm the Car class!")
  }
}

class ElectricCar extends Car {
  constructor(make, model, color, batteryCharge) {
    super(make, model, color)
    this.batteryCharge = batteryCharge
  }
  start() {
    if (this.batteryCharge > 0) {
      this.isRunning = true
      console.log('Your electric car is running!')
    } else {
      this.isRunning = false
      console.log('Time to recharge!')
    }
  }
}

// const myCar = new Car('Ford', 'Bronco')
// const myDreamCar = new Car('Acura', 'NSX', 'green')

const myVolvo = new ElectricCar('Volvo', 'EX30', 'gray', 100)

myVolvo.start()
console.log(myVolvo)
myVolvo.batteryCharge = 0

myVolvo.start()
console.log(myVolvo)


// console.log(myDreamCar)
// myDreamCar.start()
// myDreamCar.stop()

// console.log(myDreamCar.toString())
// Car.about()


const hybridCar = {
  make: 'Toyota',
  model: 'Prius',
  color: 'Black',
  isRunning: false,
  start: function() {
    hybridCar.isRunning = true
    console.log('Running!')
  },
}

