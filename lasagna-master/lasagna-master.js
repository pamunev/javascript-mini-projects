/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return `Lasagna is done.`;
  }
  if (!remainingTime) {
    return `You forgot to set the timer.`;
  }
  if (remainingTime > 0) {
    return `Not done, please wait.`;
  }
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  let noodleLayers = 0;
  let sauceLayers = 0;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") {
      noodleLayers += 1;
    }
    if (layers[i] === "sauce") {
      sauceLayers += 1;
    }
  }
  let noodleGramsNeeded = noodleLayers * 50;
  let sauceLitersNeeded = sauceLayers * 0.2;
  console.log("noodLay:", noodleLayers);
  console.log("noodgrams:", noodleGramsNeeded);
  return { noodles: noodleGramsNeeded, sauce: sauceLitersNeeded };
}

const test = quantities(["noodles", "noodles", "sauce"]);
console.log("test:", test);
