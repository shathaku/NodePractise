function TripCalculator() {
  this.calculate = function(startKm, endKm, rate) {
    return (endKm - startKm) * rate;
  }
}

const trip = new TripCalculator();
console.log(trip)
console.log(trip.calculate(123, 189, 13));





function AdvanceTripCalculator() {
  this.setOtp = function(otp) {
    this.otp = otp
  };
  this.setStart = function(start) {
    this.start = start
  };
  this.setEnd = function(end) {
    this.end = end
  };
  this.setRate = function(rate) {
    this.rate = rate
  };
  this.getExpense = function() {
    return (this.end - this.start) * this.rate;
  }
}

function TripAdaptor(otp) {
  const adv = new AdvanceTripCalculator();
  adv.setOtp(otp)
  this.calculate = function(startKm, endKm, rate) {
    adv.setStart(startKm);
    adv.setEnd(endKm);
    adv.setRate(rate);
    return adv.getExpense();
  }
}

const tripad = new TripAdaptor(1234);
console.log(tripad.calculate(123, 189, 13));