# Lab 5 – WWW & Structures

This project was completed for **CSI 3540 – Laboratory 5**.

The source code is available in this repository.
A hosted version is also available via GitHub Pages:

[https://lab5-3540.adityabaindur.com](https://lab5-3540.adityabaindur.com)

Tailwind CSS was used for all styling

---

## Question 1

Live Version : [https://lab5-3540.adityabaindur.com/1](https://lab5-3540.adityabaindur.com/1)

A JavaScript `RegExp` object was used to validate phone numbers.

```javascript
const reg = /^(\(\d{3}\)|\d{3})[-/. ]?\d{3}[-/. ]?\d{4}$/;
```

This expression validates phone numbers such as:

* (123)456-7890
* (123) 456-7890
* 123-456-7890
* 123.456.7890
* 123 456 7890
* 1234567890

Additional validation was implemented to detect invalid characters:

```javascript
const regNum = /^[0-9()\-.\/ ]+$/;
```

This ensures that only digits and the allowed separators are accepted.

---

## Question 2 

Live Version : [https://lab5-3540.adityabaindur.com/2](https://lab5-3540.adityabaindur.com/2)

A random arithmetic expression generator was implemented.

Random numbers are generated using:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

An operator is randomly selected from the following list:

```javascript
["+", "-", "*", "/"]
```

If the selected operator is division (`/`), the second number is ensured to be non-zero to avoid division by zero.

---

## Question 3

Live Version : [https://lab5-3540.adityabaindur.com/3](https://lab5-3540.adityabaindur.com/3)

The expression generator from Question 2 was reused and extended to allow user input.

A global variable is used to store the generated expression:

```javascript
let expr = "";
```

The user can submit an answer, which is evaluated against the correct result using JavaScript’s `eval()` function.

---

Built with <3 @ UOttawa for CSI 3540 Lab 5
