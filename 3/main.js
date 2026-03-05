let expr = ""; // global variable

function genNumber() {

  const a = randInt(1, 20);
  const b = randInt(1, 20);

  const ops = ["+", "-", "*", "/"];
  const op = ops[randInt(0, ops.length - 1)];

  let left = a;
  let right = b;

  if (op === "/") {
    right = randInt(1, 20);
  }

  expr = `${left} ${op} ${right}`;

  document.getElementById("exprText").textContent = expr;

  askUser();
}

function askUser(){

  const answer = window.prompt(
    "Entrez la valeur de l'expression " + expr + " : ",
    ""
  );

  const correct = eval(expr);

  if (Number(answer) === correct){
      alert("Correct!");
  } else {
      alert("Incorrect. Correct answer: " + correct);
  }

  document.getElementById("answerText").textContent = correct;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function goHome(){
  window.location.href="../index.html";
}