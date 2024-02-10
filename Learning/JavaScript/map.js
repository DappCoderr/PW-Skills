const mp = new Map();

console.log(mp);

mp.set("name", "hardik");
mp.set("age", 27);
mp.set("profession", "blockchain engineer");

console.log(mp);

// for of loop
for (entry of mp) {
  console.log(entry);
}
