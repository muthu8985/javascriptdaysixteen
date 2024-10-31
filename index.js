// try and catch methods
try {
  addalert("! Welcome Guest !");
} catch {
  console.log(err.message);
}
// try and catch method and error handling;

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  } finally {
    // The finally statement lets you execute code, after try and catch, regardless of the result:

    document.getElementById("demo").value = "";
  }
}
// An EvalError indicates an error in the eval() function.


// A RangeError is thrown if you use a number that is outside the range of legal values.


// A ReferenceError is thrown if you use (reference) a variable that has not been declared:

// A SyntaxError is thrown if you try to evaluate code with a syntax error.

// A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function.

// A URIError is thrown if you use illegal characters in a URI function:

