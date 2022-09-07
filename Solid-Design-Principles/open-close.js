const s = require('./single-responsibility');

// Non Open-Close Principle
function areaSum(shapes) {
  const areas = [];
  for(let i of shapes) {
    if(i.name === 'Circle') {
      areas.push(Math.PI * i.radius ** 2);
    } else if (i.name === 'Square') {
      areas.push(i.length ** 2)
    }
  }
  console.log(areas)
  return areas.reduce((acc, curr) => acc += curr, 0)
};
const shapes = [
  s.circle(2),
  s.square(4),
  s.circle(6),
];
console.log(areaSum(shapes))




// Following Open-Close Principle
function getAreaSum() {
  const areas = [];
  for(let i of shapes) {
    areas.push(i.area());
  }
  console.log(areas)
  return areas.reduce((acc, curr) => acc += curr, 0)
}

console.log(getAreaSum(shapes))