# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: a stack overflow caused by an improperly designed recursive function.

The `bug.js` file contains a recursive function (`foo`) that calculates a result. However, it lacks a proper base case for larger inputs. This leads to infinite recursion and eventually a stack overflow error.

The `bugSolution.js` file provides a corrected version of the function with an appropriate base case which prevents this type of error.

## How to Reproduce the Bug

1. Clone this repository.
2. Open `bug.js` and execute the `foo` function with a relatively large integer as the first argument.
3. Observe the stack overflow error.

## How to Solve the Bug

1. Implement proper base cases to prevent infinite recursion.