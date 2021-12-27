// Efeito do cursor
var colour = "#FFFFFF";
var sparkles = 50;
var x = (ox = 400);
var y = (oy = 300);
var swide = 800;
var shigh = 600;
var sleft = (sdown = 0);
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();
window.onload = function () {
  if (document.getElementById) {
    var i, rats, rlef, rdow;
    for (var i = 0; i < sparkles; i++) {
      var rats = createDiv(3, 3);
      rats.style.visibility = "hidden";
      document.body.appendChild((tiny[i] = rats));
      starv[i] = 0;
      tinyv[i] = 0;
      var rats = createDiv(5, 5);
      rats.style.backgroundColor = "transparent";
      rats.style.visibility = "hidden";
      var rlef = createDiv(1, 5);
      var rdow = createDiv(5, 1);
      rats.appendChild(rlef);
      rats.appendChild(rdow);
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild((star[i] = rats));
    }
    set_width();
    sparkle();
  }
};
function sparkle() {
  var c;
  if (x != ox || y != oy) {
    ox = x;
    oy = y;
    for (c = 0; c < sparkles; c++)
      if (!starv[c]) {
        star[c].style.left = (starx[c] = x) + "px";
        star[c].style.top = (stary[c] = y) + "px";
        star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
        star[c].style.visibility = "visible";
        starv[c] = 50;
        break;
      }
  }
  for (c = 0; c < sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}
function update_star(i) {
  if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i] += 1 + Math.random() * 3;
    if (stary[i] < shigh + sdown) {
      star[i].style.top = stary[i] + "px";
      starx[i] += ((i % 5) - 2) / 5;
      star[i].style.left = starx[i] + "px";
    } else {
      star[i].style.visibility = "hidden";
      starv[i] = 0;
      return;
    }
  } else {
    tinyv[i] = 50;
    tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
    tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
    tiny[i].style.width = "2px";
    tiny[i].style.height = "2px";
    star[i].style.visibility = "hidden";
    tiny[i].style.visibility = "visible";
  }
}
function update_tiny(i) {
  if (--tinyv[i] == 25) {
    tiny[i].style.width = "1px";
    tiny[i].style.height = "1px";
  }
  if (tinyv[i]) {
    tinyy[i] += 1 + Math.random() * 3;
    if (tinyy[i] < shigh + sdown) {
      tiny[i].style.top = tinyy[i] + "px";
      tinyx[i] += ((i % 5) - 2) / 5;
      tiny[i].style.left = tinyx[i] + "px";
    } else {
      tiny[i].style.visibility = "hidden";
      tinyv[i] = 0;
      return;
    }
  } else tiny[i].style.visibility = "hidden";
}
document.onmousemove = mouse;
function mouse(e) {
  set_scroll();
  y = e ? e.pageY : event.y + sdown;
  x = e ? e.pageX : event.x + sleft;
}
function set_scroll() {
  if (typeof self.pageYOffset == "number") {
    sdown = self.pageYOffset;
    sleft = self.pageXOffset;
  } else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown = document.body.scrollTop;
    sleft = document.body.scrollLeft;
  } else if (
    document.documentElement &&
    (document.documentElement.scrollTop || document.documentElement.scrollLeft)
  ) {
    sleft = document.documentElement.scrollLeft;
    sdown = document.documentElement.scrollTop;
  } else {
    sdown = 0;
    sleft = 0;
  }
}
window.onresize = set_width;
function set_width() {
  if (typeof self.innerWidth == "number") {
    swide = self.innerWidth;
    shigh = self.innerHeight;
  } else if (document.documentElement && document.documentElement.clientWidth) {
    swide = document.documentElement.clientWidth;
    shigh = document.documentElement.clientHeight;
  } else if (document.body.clientWidth) {
    swide = document.body.clientWidth;
    shigh = document.body.clientHeight;
  }
}
function createDiv(height, width) {
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height + "px";
  div.style.width = width + "px";
  div.style.overflow = "hidden";
  div.style.backgroundColor = colour;
  return div;
}
// Efeito do cursor



var context = {
  /*
    Elemento form
   */
  form: null,
  btn1: null,
  btn2: null,

  form1: null,
  next1: null,
  form2: null,
  next2: null,
  form3: null,
  next3: null,
  form4: null,
  next4: null,
  form5: null,
  next5: null,
  form6: null,
  next6: null,
  form7: null,
  next7: null,
  form8: null,
  next8: null,
  form9: null,
};

function questions() {
  // context.form = document.getElementById("form");

  for (var i = 1; i <= 2; i++) {
    context[`btn${[i]}`] = document.getElementById(`btn${[i]}`)
  }

  for (var i = 1; i <= 9; i++) {
    context[`form${[i]}`] = document.getElementById(`form${[i]}`);
  }
  for (var i = 1; i <= 8; i++) {
    context[`next${[i]}`] = document.getElementById(`next${[i]}`);
  }

}

//Formulário aparece ao clicar no botão
function beginCeremony() {
  context.btn1.style.display = "none";
  context.form1.style.display = "block";
  context.next1.style.display = "block";
}

function primeiroNext() {
  context.next1.style.display = "none";
  context.next2.style.display = "block";
  context.form1.style.display = "none";
  context.form2.style.display = "block";
}

function segundoNext() {
  context.next2.style.display = "none";
  context.next3.style.display = "block";
  context.form2.style.display = "none";
  context.form3.style.display = "block";
}

function terceiroNext() {
  context.next3.style.display = "none";
  context.next4.style.display = "block";
  context.form3.style.display = "none";
  context.form4.style.display = "block";
}

function quartoNext() {
  context.next4.style.display = "none";
  context.next5.style.display = "block";
  context.form4.style.display = "none";
  context.form5.style.display = "block";
}

function quintoNext() {
  context.next5.style.display = "none";
  context.next6.style.display = "block";
  context.form5.style.display = "none";
  context.form6.style.display = "block";
}

function sextoNext() {
  context.next6.style.display = "none";
  context.form6.style.display = "none";
  context.next7.style.display = "block";
  context.form7.style.display = "block";
}

function setimoNext() {
  context.next7.style.display = "none";
  context.form7.style.display = "none";
  context.next8.style.display = "block";
  context.form8.style.display = "block";
}

function oitavoNext() {
  context.next8.style.display = "none";
  context.form8.style.display = "none";
  context.form9.style.display = "block";
  context.btn2.style.display = "block";
}

function finalizar() {
  /* SOLUÇÃO ALTERNATIVA
  var nomes = [
    "social",
    "connect",
    "joy",
    "fear",
    "aim",
    "attract",
    "strength",
  ];
  var res = 0;
  for (var i = 0; i < nomes.length; i++) {
    res += parseInt(
      document.querySelector("input[name=" + nomes[i] + "]:checked").value
    );
  }
  */

  // Soma dos valores das classes slytherin marcadas
  var resSly = document.querySelectorAll("input.slytherin:checked");
  var slyArray = Array.from(resSly);
  var slySomaValue = 0;
  for (var i = 0; i < slyArray.length; i++) {
    slySomaValue += parseInt(slyArray[i].value);
  }

  // Soma dos valores das classes gryffindor marcadas
  var resGryff = document.querySelectorAll("input.gryffindor:checked");
  var gryffArray = Array.from(resGryff);
  var gryffSomaValue = 0;
  for (var i = 0; i < gryffArray.length; i++) {
    gryffSomaValue += parseInt(gryffArray[i].value);
  }

  // Soma dos valores das classes hufflepuff marcadas
  var resHuff = document.querySelectorAll("input.hufflepuff:checked");
  var huffArray = Array.from(resHuff);
  var huffSomaValue = 0;
  for (var i = 0; i < huffArray.length; i++) {
    huffSomaValue += parseInt(huffArray[i].value);
  }

  // Soma dos valores das classes ravenclaw marcadas
  var resRaven = document.querySelectorAll("input.ravenclaw:checked");
  var ravenArray = Array.from(resRaven);
  var ravenSomaValue = 0;
  for (var i = 0; i < ravenArray.length; i++) {
    ravenSomaValue += parseInt(ravenArray[i].value);
  }

  
  // Display formulário e botões como none
  form9.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";

  // Revela a casa
  var sly = document.getElementById("sly");
  var gryff = document.getElementById("gryff");
  var huff = document.getElementById("huff");
  var raven = document.getElementById("raven");
  var hall = document.getElementById("hall");
  var hat = document.getElementById("hatid");

  // Esconde formulário e botão next para revelar casa após desempate
  var slyGryff = document.getElementById("sly-or-gryff");
  slyGryff.style.display = "none";
  var next9 = document.getElementById("next9");
  next9.style.display = "none";

  var slyHuff = document.getElementById("sly-or-huff");
  slyHuff.style.display = "none";
  var next10 = document.getElementById("next10");
  next10.style.display = "none";

  var slyRaven = document.getElementById("sly-or-raven");
  slyRaven.style.display = "none";
  var next11 = document.getElementById("next11");
  next11.style.display = "none";

  var gryffHuff = document.getElementById("gryff-or-huff");
  gryffHuff.style.display = "none";
  var next12 = document.getElementById("next12");
  next12.style.display = "none";

  var gryffRaven = document.getElementById("gryff-or-raven");
  gryffRaven.style.display = "none";
  var next13 = document.getElementById("next13");
  next13.style.display = "none";

  var huffRaven = document.getElementById("huff-or-raven");
  huffRaven.style.display = "none";
  var next14 = document.getElementById("next14");
  next14.style.display = "none";

  if (
    slySomaValue > gryffSomaValue &&
    slySomaValue > huffSomaValue &&
    slySomaValue > ravenSomaValue
  ) {
    hat.style.display = "none";
    sly.style.display = "flex";
    hall.style.backgroundImage = "url('slycr.png')";
    hall.style.backgroundSize = "fill";
  } else if (
    gryffSomaValue > slySomaValue &&
    gryffSomaValue > huffSomaValue &&
    gryffSomaValue > ravenSomaValue
  ) {
    hat.style.display = "none";
    gryff.style.display = "flex";
    hall.style.backgroundImage = "url('gryffcr.webp')";
  } else if (
    huffSomaValue > slySomaValue &&
    huffSomaValue > gryffSomaValue &&
    huffSomaValue > ravenSomaValue
  ) {
    hat.style.display = "none";
    huff.style.display = "flex";
    hall.style.backgroundImage = "url('huffcr.jpeg')";
  } else if (
    ravenSomaValue > slySomaValue &&
    ravenSomaValue > gryffSomaValue &&
    ravenSomaValue > huffSomaValue
  ) {
    hat.style.display = "none";
    raven.style.display = "flex";
    hall.style.backgroundImage = "url('ravencr.jpeg')";
    hall.style.backgroundSize = "cover";
  } else if (
    slySomaValue == gryffSomaValue &&
    slySomaValue &&
    gryffSomaValue !== 0
  ) {
    slyGryff.style.display = "block";
    next9.style.display = "block";
  } else if (
    slySomaValue == huffSomaValue &&
    slySomaValue &&
    huffSomaValue !== 0
  ) {
    slyHuff.style.display = "block";
    next10.style.display = "block";
  } else if (
    slySomaValue == ravenSomaValue &&
    slySomaValue &&
    ravenSomaValue !== 0
  ) {
    slyRaven.style.display = "block";
    next11.style.display = "block";
  } else if (
    gryffSomaValue == huffSomaValue &&
    gryffSomaValue &&
    huffSomaValue !== 0
  ) {
    gryffHuff.style.display = "block";
    next12.style.display = "block";
  } else if (
    gryffSomaValue == ravenSomaValue &&
    gryffSomaValue &&
    ravenSomaValue !== 0
  ) {
    gryffRaven.style.display = "block";
    next13.style.display = "block";
  } else if (
    huffSomaValue == ravenSomaValue &&
    huffSomaValue &&
    ravenSomaValue !== 0
  ) {
    console.log("huff ou raven");
    huffRaven.style.display = "block";
    next14.style.display = "block";
  }
}
