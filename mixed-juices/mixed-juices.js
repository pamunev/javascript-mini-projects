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
  let ordersLeft = [];
  let i = 0;

  while (i < orders.length) {
    switch (timeLeft > 0) {
      case true:
        timeLeft -= timeToMixJuice(orders[i]);
        i += 1;
        break;
      case false:
        ordersLeft.push(orders[i]);
        i += 1;
        break;
    }
  }

  return ordersLeft;
}

// It's not decreasing the timeLeft.
// okay, let's try another approach. Let's try adding it to time elapsed, then comparing the two.

// Whoops. Never mind. I was trying to change timeLeft by just subtracting, when I actually needed to redeclare the variable.
