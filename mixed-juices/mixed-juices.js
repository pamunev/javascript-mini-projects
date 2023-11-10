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

  while (totalWedges < wedgesNeeded && totalLimes <= limes.length - 1) {
    for (let i = 0; i < limes.length && totalWedges < wedgesNeeded; i++) {
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
      console.log(
        "total lime count:",
        totalLimes,
        "total wedges count:",
        totalWedges,
        "i equals:",
        i
      );
    }
  }
  return totalLimes;
}

console.log(
  "testing",
  limesToCut(25, ["small", "medium", "large", "large", "large", "small"])
);

// Why is it not stopping the count after it reaches the wedgesNeeded number? It's continuing to loop through the
// array. The for loop.
// Okay, I added another condition to the for loop next to i < limes.length, and now all the tests are passing.
// Maybe there's a way to clean up the code, because repeating the logic in the While loop and the for loop
// Isn't very DRY of me. I'll do it tomorrow.
// Maybe there's a way for me to do this without the for loop, since they want me to use a while loop.
// At this point, I don't even need the while loop, I think.
// I guess at the end of the while loop I could add 1 to the index, and that would do it.

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error("Please implement the remainingOrders function");
}
