function truthCheck(collection, prop) {
  for (let i = 0; i < collection.length; i++) {
    let collections = collection[i];
    for (let j = 0; j < collections.length; j++) {
      let property = collections[j];
      if (typeof property[prop] === "string") {
        return true;
      } else {
        return false;
      }
    }
  }

  return;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot",
  ),
);
