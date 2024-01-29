## Predict the out of following questions without executing them:

## Problem 1

```
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
```

`Answer: ACB`

## Problem 2

```
setTimeout(() => {
    console.log("A");
    setTimeout(() => console.log("B"), 1000);
}, 1000);
console.log("C");
```

`Answer: CAB`

## Problem 3

```
setTimeout(() => console.log("A"), 3000);
setTimeout(() => console.log("B"), 2000);
setTimeout(() => console.log("C"), 1000);
```

`Answer: CBA`

## Problem 4

```
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

`Answer: ACB`

## Problem 5

```
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
```

`Answer: 012`

## Problem 6

```
setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => console.log("C"), 500);
    }, 1000);
}, 1500);
```

`Answer: ACB`

## Problem 7

```
console.log("A");
setTimeout(() => console.log("B"), 1000);
for(let i = 0; i < 1000000000; i++) {}  // Long loop
console.log("C");
```

`Answer: ACB`

## problem 8

```
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
```

`Answer: 3`

## Problem 9

```
for (var i = 0; i < 3; i++) {
    setTimeout((j) => {
        console.log(j);
        setTimeout(() => console.log(j + 1), 1000);
    }, i * 2000, i);
}
```

`Answer: `

## Problem 10

```
setTimeout(() => console.log("A"), 2500);
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("B" + i);
        setTimeout(() => {
            console.log("C" + i);
        }, i * 500 + 500);
    }, i * 1000);
}
```

`Answer: B0 C0 B1 B2 C1 A C2`

## Problem 11

```
function first(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    }, 500);
}
function second() {
    console.log("second");
}
first(second);
```

`Answer: first second`

## Problem 12

```
let count = 0;
setTimeout(() => console.log(++count), 1000);
setTimeout(() => console.log(count++), 2000);
setTimeout(() => console.log(++count), 3000);
```

`Answer: 113`

## Problem 13

```
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000 * i);
}
```

`Answer: 012`

## Problem 14

```
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(() => console.log(j), 2000 * j);
    })(i);
}
```

`Answer: ACB`

## Problem 15

```
console.log("1");
setTimeout(() => {
    console.log("2");
    setTimeout(() => console.log("3"), 1000);
}, 2000);
setTimeout(() => console.log("4"), 1000);
console.log("5");
```

`Answer: ACB`
