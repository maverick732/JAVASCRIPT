let lunches = [];
const addLunchToEnd = (arrayOfFood, food) => {
  lunches = arrayOfFood;
  console.log(`${food} added to the end of the lunch menu.`);
  lunches.push(food);
  return lunches;
};
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

const addLunchToStart = (arrayOfFood, food) => {
  lunches = arrayOfFood;
  console.log(`${food} added to the start of the lunch menu.`);
  lunches.unshift(food);
  return lunches;
};
console.log(addLunchToStart(lunches, "Sushi"));

const removeLastLunch = (array) => {
  if (!array) {
    console.log("No lunches to remove.");
    return array;
  }
  const removedItem = array.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);

  return array;
};
console.log(removeLastLunch(lunches));

const removeFirstLunch = (array) => {
  if (!array) {
    console.log("No lunches to remove.");
    return array;
  }
  const removedItem = array.shift();
  console.log(`${removedItem} removed from the first of the lunch menu.`);

  return array;
};
console.log(removeFirstLunch(lunches));

const getRandomLunch = (array) => {
  let randomLunchNum = Math.floor(Math.random() * array.length);
  let randomArray = array[randomLunchNum];
  if (!array) {
    console.log("No lunches available.");
  }
  return `Randomly selected lunch: ${randomArray}`;
};
console.log(getRandomLunch(lunches));

const showLunchMenu = (array) => {
  if (array.length === 0) {
    console.log("The menu is empty");
    return array;
  }
  let lunchMenu = array.join(", ");
  return `Menu items: ${lunchMenu}`;
};
console.log(showLunchMenu(lunches));
