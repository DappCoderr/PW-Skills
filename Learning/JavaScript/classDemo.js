class Product {
  // properties -> class members
  constructor(n, d, i, p) {
    this.name = n;
    this.description = d;
    this.image = i;
    this.price = p;
  }

  //behaviour -> class method
  buy() {}
}

const obj = new Product("hardik", "", "image", 0);
console.log(obj);

const obj2 = new Product("kartikay", "", "image", 0);
console.log(obj2);
