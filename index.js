var a1 = 0,
  a2 = 0,
  a3 = 0,
  b1 = 0,
  b2 = 0,
  b3 = 0,
  c1 = 0,
  c2 = 0,
  c3 = 0;

var flag = 0,
  buttonClicks = 0;

function checkResult() {
  if (a1 == 1 && a2 == 1 && a3 == 1) {
    document.getElementById("win").textContent = "X WINS via row 1";
  } else if (a1 == 2 && a2 == 2 && a3 == 2) {
    document.getElementById("win").textContent = "O WINS via row 1";
  } else if (b1 == 1 && b2 == 1 && b3 == 1) {
    document.getElementById("win").textContent = "X WINS via row 2";
  } else if (b1 == 2 && b2 == 2 && b3 == 2) {
    document.getElementById("win").textContent = "O WINS via row 2";
  } else if (c1 == 1 && c2 == 1 && c3 == 1) {
    document.getElementById("win").textContent = "X WINS via row 3";
  } else if (c1 == 2 && c2 == 2 && c3 == 2) {
    document.getElementById("win").textContent = "O WINS via row 3";
  } else if (a1 == 1 && b1 == 1 && c1 == 1) {
    document.getElementById("win").textContent = "X WINS via column 1";
  } else if (a1 == 2 && b1 == 2 && c1 == 2) {
    document.getElementById("win").textContent = "O WINS via column 1";
  } else if (a2 == 1 && b2 == 1 && c2 == 1) {
    document.getElementById("win").textContent = "X WINS via column 2";
  } else if (a2 == 2 && b2 == 2 && c2 == 2) {
    document.getElementById("win").textContent = "O WINS via column 2";
  } else if (a3 == 1 && b3 == 1 && c3 == 1) {
    document.getElementById("win").textContent = "X WINS via column 3";
  } else if (a3 == 2 && b3 == 2 && c3 == 2) {
    document.getElementById("win").textContent = "O WINS via column 3";
  } else if (a1 == 1 && b2 == 1 && c3 == 1) {
    document.getElementById("win").textContent = "X WINS via left diagonal";
  } else if (a1 == 2 && b2 == 2 && c3 == 2) {
    document.getElementById("win").textContent = "O WINS via left diagonal";
  } else if (a3 == 1 && b2 == 1 && c1 == 1) {
    document.getElementById("win").textContent = "X WINS via left diagonal";
  } else if (a3 == 2 && b2 == 2 && c1 == 2) {
    document.getElementById("win").textContent = "O WINS via left diagonal";
  }
  console.log(
    a1 +
      " " +
      a2 +
      " " +
      a3 +
      " " +
      b1 +
      " " +
      b2 +
      " " +
      b3 +
      " " +
      c1 +
      " " +
      c2 +
      " " +
      c3
  );
}

document.getElementById("a1").addEventListener(
  "click",
  function () {
    buttonClicks++;
    if (flag == 0) {
      a1 = 1;
      document.getElementById("a1").textContent = "X";
      flag = 1;
    } else if (flag == 1) {
      a1 = 2;
      document.getElementById("a1").textContent = "O";
      flag = 0;
    }
    checkResult();
  },
  { once: true }
);

document.getElementById("a2").addEventListener(
  "click",
  function () {
    buttonClicks++;
    if (flag == 0) {
      a2 = 1;
      document.getElementById("a2").textContent = "X";
      flag = 1;
    } else if (flag == 1) {
      a2 = 2;
      document.getElementById("a2").textContent = "O";
      flag = 0;
    }
    checkResult();
  },
  { once: true }
);

document.getElementById("a3").addEventListener(
  "click",
  function () {
    buttonClicks++;
    if (flag == 0) {
      a3 = 1;
      document.getElementById("a3").textContent = "X";
      flag = 1;
    } else if (flag == 1) {
      a3 = 2;
      document.getElementById("a3").textContent = "O";
      flag = 0;
    }
    checkResult();
  },
  { once: true }
);

document.getElementById("b1").addEventListener(
  "click",
  function () {
    buttonClicks++;
    if (flag == 0) {
      b1 = 1;
      document.getElementById("b1").textContent = "X";
      flag = 1;
    } else if (flag == 1) {
      b1 = 2;
      document.getElementById("b1").textContent = "O";
      flag = 0;
    }
    checkResult();
  },
  { once: true }
);

document.getElementById("b2").addEventListener(
  "click",
  function () {
    buttonClicks++;
    if (flag == 0) {
      b2 = 1;
      document.getElementById("b2").textContent = "X";
      flag = 1;
    } else if (flag == 1) {
      b2 = 2;
      document.getElementById("b2").textContent = "O";
      flag = 0;
    }
    checkResult();
  },
  { once: true }
);

document.getElementById("b3").addEventListener(
  "click",
  function () {
    buttonClicks++;
    if (flag == 0) {
      b3 = 1;
      document.getElementById("b3").textContent = "X";
      flag = 1;
    } else if (flag == 1) {
      b3 = 2;
      document.getElementById("b3").textContent = "O";
      flag = 0;
    }
    checkResult();
  },
  { once: true }
);

document.getElementById("c1").addEventListener(
  "click",
  function () {
    buttonClicks++;
    if (flag == 0) {
      c1 = 1;
      document.getElementById("c1").textContent = "X";
      flag = 1;
    } else if (flag == 1) {
      c1 = 2;
      document.getElementById("c1").textContent = "O";
      flag = 0;
    }
    checkResult();
  },
  { once: true }
);

document.getElementById("c2").addEventListener(
  "click",
  function () {
    buttonClicks++;
    if (flag == 0) {
      c2 = 1;
      document.getElementById("c2").textContent = "X";
      flag = 1;
    } else if (flag == 1) {
      c2 = 2;
      document.getElementById("c2").textContent = "O";
      flag = 0;
    }
    checkResult();
  },
  { once: true }
);

document.getElementById("c3").addEventListener(
  "click",
  function () {
    buttonClicks++;
    if (flag == 0) {
      c3 = 1;
      document.getElementById("c3").textContent = "X";
      flag = 1;
    } else if (flag == 1) {
      c3 = 2;
      document.getElementById("c3").textContent = "O";
      flag = 0;
    }
    checkResult();
  },
  { once: true }
);
