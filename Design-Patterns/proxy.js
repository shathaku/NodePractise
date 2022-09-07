function pincodeIdentifier() {
  this.getCity = function(pincode) {
    switch(pincode){
      case '110032':
        return 'New Delhi';
        break;
      case '250001':
        return 'Meerut';
        break;
      case '411014':
        return 'Pune';
        break;
      default:
        return 'India';
    }
  }
}

const pi = new pincodeIdentifier();
console.log(pi.getCity('110032'));


function pincodeProxy() {
  const pincodeMap = {};
  const p = new pincodeIdentifier();
  
  this.getCity = function(pincode) {
    if(!pincodeMap[pincode]) {
      pincodeMap[pincode] = p.getCity(pincode);
    } 
    return pincodeMap[pincode]
  }
}

const pp = new pincodeProxy();
console.log(pp.getCity('110032'))