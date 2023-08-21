// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  const volume = (4/3) * PI * (Math.pow(radius, 3));
  return volume;
};
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  const volume = (1/3) * PI * (Math.pow(radius, 2)) * height;
  return volume;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  const base = depth * width;
  const volume = base * height;
  return volume;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;
  for (const solid of solids){
    if (solid.type === "sphere"){
      total = total + sphereVolume(solid.radius);
    } else if (solid.type === "cone"){
      total = total + coneVolume(solid.radius, solid.height);
    } else {
      total = total + prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);