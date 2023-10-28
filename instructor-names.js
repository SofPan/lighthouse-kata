const instructorWithLongestName = (instructors) => {
  // Set an object with the same key-values to compare against
  let longName = { name: "", course: "" };

  // check each instructor's name length against the placeholder
  for (const inst of instructors) {
    if (inst.name.length > longName.name.length) {
      longName = inst;
    }
  }

  return longName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);