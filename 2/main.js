// Vous devez concevoir un programme JavaScript qui génère des expressions arithmétiques aléatoires composées des opérations suivantes: -, +, *, /.

// Generates a random arithmetic expression with +, -, *, /
function genNumber() {
  // pick 2 random integers between 1 & 20
  const a = randInt(1, 20);
  const b = randInt(1, 20);

  // pick a random operator
  const ops = ["+", "-", "*", "/"];
  const op = ops[randInt(0, ops.length - 1)];

  
  let left = a;
  let right = b;

  if (op === "/") {
    // make sure no divide-by-zero and keep it cleaner
    right = randInt(1, 20);
  }

  const expr = `${left} ${op} ${right}`;
  // show on page
  document.getElementById("exprText").textContent = expr;
}

// helpers
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Helper function to go home
 */
function goHome(){
    window.location.href="../index.html";
}