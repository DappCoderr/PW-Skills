function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

var x = generator();
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
