class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
  }
}

const myCar = new Car('Ford', 'Bronco')
console.log(myCar)

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

