class Car {
  constructor(make, model, color) {
    this.make = make
    this.model = model
    this.color = color
    this.isRunning = false
  }
}

const myCar = new Car('Ford', 'Bronco')
const myDreamCar = new Car('Acura', 'NSX', 'green')
console.log(myCar)
console.log(myDreamCar)

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

