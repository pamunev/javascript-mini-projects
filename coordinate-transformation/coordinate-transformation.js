// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  function movingCoordinates(x1, x2) {
    const c1 = dx + x1;
    const c2 = dy + x2;
    return [c1, c2];
  }
  return movingCoordinates;
}

const move2Spaces = translate2d(2, 5);
console.log("move2SpacesVariable:", move2Spaces);
console.log("move2SpacesResult:", move2Spaces(3, 7));

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  function multiplied(x1, x2) {
    const c1 = sx * x1;
    const c2 = sy * x2;
    return [c1, c2];
  }
  return multiplied;
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  // f and g are functions. They each output a value.
  console.log("f:", f);
  console.log("g:", g);
  function composition(x, y) {
    const intermediateResult = f(x, y);
    return g(intermediateResult[0], intermediateResult[1]);
  }
  return composition;
  //return g(f[0], f[1]);
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  // f is a function.
  console.log("f:", f);
  let lastX;
  let lastY;
  let lastResult;
  function memoized(x, y) {
    if (x !== lastX || y !== lastY) {
      lastX = x;
      lastY = y;
      lastResult = f(x, y);
    }
    return lastResult;
  }
  return memoized;
}
