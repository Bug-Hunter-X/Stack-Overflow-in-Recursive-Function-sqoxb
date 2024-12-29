function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return b; // Handle negative 'a' to prevent errors
  }
  return foo(a - 1, a + b);
}
//Additional Check for Preventing Stack Overflow
function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return b; // Handle negative 'a' to prevent errors
  } else if (a > 1000) { // Add a limit to the recursion depth
    return Infinity; // Return a meaningful value or throw an error
  }
  return foo(a - 1, a + b);
}