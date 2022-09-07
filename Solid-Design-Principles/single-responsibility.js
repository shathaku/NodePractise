// create Circle factory
const circle = (radius) => {
  const proto = {
    name: 'Circle',
    area() {
      return Math.PI * radius ** 2;
    },
  };
  return Object.assign(Object.create(proto), { radius });
};

// create Square factory
const square = (length) => {
  const proto = {
    name: 'Square',
    area() {
      return length ** 2;
    },
  };
  return Object.assign(Object.create(proto), { length });
};

// create factory to calculate Sum of area of all shapes
const calculateAreaSum = (shapes) => {
  const proto = {
    sum() {
      return shapes.reduce((acc, curr) => {
        acc += curr.area();
        return acc;
      }, 0);
    }
  };
  return Object.assign(Object.create(proto), { shapes });
};

// Call calculareAreaSum
const shapes = [
  circle(2),
  square(4),
  circle(6),
];

const areaSum = calculateAreaSum(shapes).sum();
console.log(areaSum)

module.exports = {
  circle,
  square
}
