function calculateValueAtCoordinate(dimensions, lowestValue, coordinate) {
  var value = lowestValue;

  for (var i = 0; i < dimensions.length; i++) {
    const interval = dimensions[i];
    value += coordinate[i] * interval;
  }

  return value;
}

function queryMatrixValue(matrixSize, dimensions, lowestValue, coordinate) {
  if (coordinate.length !== dimensions.length) {
    throw new Error('Coordinate dimensions do not match matrix dimensions');
  }
  var outaBounds = coordinate.some(function(c) {
    return c >= matrixSize || c < 0
  })

  if (outaBounds) {
    throw new Error('Coordinate is out of matrix bounds');
  }

  const value = calculateValueAtCoordinate(dimensions, lowestValue, coordinate);
  return value;
}


function list() {
  // coordinates is a list of 12 integers to find a value in a 12 dimensional matrix
  var coordinate = arrayfromargs(arguments);
  var matrixSize = 12;
  var dimensions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var lowestValue = -12;
  var value = queryMatrixValue(matrixSize, dimensions, lowestValue, coordinate);
  outlet(0, value)
}

// TODO:
// write array outputs to collections  to avoid js array objects
// interface to output a vector is a given direction
