// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time;
  switch (name) {
    case "Pure Strawberry Joy":
      time = 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      time = 1.5;
      break;
    case "Tropical Island":
      time = 3;
      break;
    case "All or Nothing":
      time = 5;
      break;
    default:
      time = 2.5;
      break;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalWedges = 0;
  let totalLimes = 0;
  let i = 0;

  while (totalWedges < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case "small":
        totalWedges += 6;
        totalLimes += 1;
        break;
      case "medium":
        totalWedges += 8;
        totalLimes += 1;
        break;
      case "large":
        totalWedges += 10;
        totalLimes += 1;
        break;
    }
    i += 1;
  }
  return totalLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // a while loop, while there is time left, and then calls timeToMixJuice function on i.
  // we subtract the timeToMixJuice minutes from timeLeft.
  // then, if the time is up, we still cycle through the array (how?), but add them to an empty array.
  // then return array.

  // I could do this easily with a for loop, but I'm going to try it with a while loop.
  // Maybe it's a while loop within the for loop. Nope.

  let remainingTime = timeLeft;
  let ordersLeft = [];
  let i = 0;

  /*while (timeLeft > 0) {
    timeLeft - timeToMixJuice(orders[i])
    i += 1
  }*/

  while (i < orders.length) {
    switch (remainingTime > 0) {
      case true:
        remainingTime - timeToMixJuice(orders[i]);
        i += 1;
        break;
      case false:
        ordersLeft.push(orders[i]);
        i += 1;
        break;
    }
    console.log(
      "remaining time:",
      remainingTime,
      "ordersLeft:",
      ordersLeft,
      "i equals:",
      i
    );
  }

  return ordersLeft;
}

console.log(
  "remaining orders none:",
  remainingOrders(5, [
    "All or Nothing",
    "Pure Strawberry Joy",
    "Tropical Island",
    "Tropical Island",
    "All or Nothing",
  ])
);

console.log("remaining some:", remainingOrders(10, []));

// It's not decreasing the timeLeft.
// okay, let's try another approach. Let's try adding it to time elapsed, then comparing the two.
