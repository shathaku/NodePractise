const shapeInterface = (state) => ({
  name: 'ShapeInterface',
  area() {
    return state.area(state);
  },
});

const solidShapeInterface = (state) => ({
  name: 'SolidShapeInterface',
  volume() {
    return state.volume(state);
  },
});

const cube = (length) => {
  const proto = {
    length,
    name: 'Cube',
    area(args) {
      return Math.pow(args.length, 2);
    },
    volume(args) {
      return Math.pow(args.length, 3);
    }
  }
  const basic = shapeInterface(proto);
  const complex = solidShapeInterface(proto);
  const composite = Object.assign({}, basic, complex);
  return Object.assign(Object.create(composite), { length })
}

const rect = (length) => {
  const proto = {
    length,
    name: 'Rect',
    area(args) {
      return Math.pow(args.length, 2);
    }
  }
  const basic = shapeInterface(proto);
  const composite = Object.assign({}, basic);
  return Object.assign(Object.create(composite), { length })
}

console.log(cube(5).volume())