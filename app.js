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
}


const myCar = new Car('Ford', 'Bronco')
const myDreamCar = new Car('Acura', 'NSX', 'green')
// console.log(myCar)
console.log(myDreamCar)

myDreamCar.start()
// console.log(myDreamCar)
myDreamCar.stop()
// console.log(myDreamCar)

console.log(myDreamCar.toString())


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

