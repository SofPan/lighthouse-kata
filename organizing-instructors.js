const organizeInstructors = (instructors) => {
  let output = {};

  for (const member of instructors) {
    // If the output object does not include the course already, create an array
    if (!output[member.course]) {
      output[member.course] = [];
    }
    // push the instructor's name to the relevant course in output
    output[member.course].push(member.name);
  }

  return output;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);