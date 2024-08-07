// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const newDeck = deck.map((card) => card * 2);
  return newDeck;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const newDeck = deck.reduce((acc, card) => {
    if (card === 3) {
      acc.push(3, 3, 3);
    } else {
      acc.push(card);
    }
    return acc;
  }, []);

  return newDeck;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.slice(4, 6);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  let arrayRemoved = [];
  const removedFirst = deck.splice(0, 1)[0];
  arrayRemoved.push(removedFirst);
  const lastIndex = deck.length - 1;
  const removedLast = deck.splice(lastIndex, 1)[0];
  arrayRemoved.push(removedLast);
  const reversedArray = arrayRemoved.reverse();
  const halfwayPointInArray = deck.length / 2;
  deck.splice(halfwayPointInArray, 0, reversedArray[0], reversedArray[1]);
  return deck;
}

/*
What I did here was switch the middle two cards in the deck. 

const startingIndex = deck.length / 2 - 1;
  console.log("initDeck:", deck);
  const removed = deck.splice(startingIndex, 2);
  console.log("deck:", deck);
  console.log("removed:", removed);
  const reversedCards = removed.reverse();
  console.log("reversed:", reversedCards);
  deck.splice(startingIndex, 0, reversedCards[0], reversedCards[1]);
  console.log("newArray:", deck);
  return deck;
*/

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
