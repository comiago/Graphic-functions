//punto(-3,-4)
//linea(2,1,4,8)

//var x = 10
//console.log(`f(${x}) = ${x*x}`)
//console.log(`f(${x}) = ${x%2==0 ? 1 : 0}`)

// parabola tra -5 e 5
/*for (var x = -5; x<=5; x=x+1)
  punto(x,x*x)*/

// calcolo durata programma
start = Date.now()
for (x = -5; x < 5; x = x + 0.1) {
  punto(x, Math.sin(x));
}
end = Date.now();
console.log(end-start)










// disegno parabola a punti
//let parabola = (x => (1/8 + x**2 - 30))
/*for (x = -30; x < 30; x+=0.1) {
  punto(x, parabola(x));
}*/

//linea(-30, parabola(0), 30, parabola(0))

// funzione per disegnare
/*colore("#fa07aa")
function plotta(fToPlot,a,b,prec) {
  for (x = a; x < b; x+=prec) {
    punto(x, fToPlot(x));
  }
}*/

// invoco la funzione plotta
//plotta(parabola, -30, 30, 0.1)
colore("#0000ff")
//plotta(Math.sin, -30, 30, 0.1) 

// altra parabola
/*parabola = (x) => x**2;
plotta(parabola, -30, 30, 0.1)*/

// calcolo minimo di una funzione in un intervallo
/*function trovaMin (f, a, b, step) {
  var min = Infinity;
  var xmin = NaN;
  for (x = a; x < b; x=x+step) {
    if (f(x) < min){
      min = f(x);
      xmin = x;
    }
  }
  console.log(`minimo di ${f} in ${xmin}: ${min}`)
}*/

//trovaMin(parabola, -5,5,0.01);

// altra parabola
/*var f = (x) => (x-0.1)**2;
plotta(f,-5,5,0.1);
trovaMin(f, -5,5,0.01);*/

//disegnare una linea con primitiva linea
/*function plotta2(f,a,b, step) {
  let x0, y0; // qui sia x0 che y0 sono undefined

  for (var x = a; x <= b; x=x+step) {
    if (x0 != undefined) 
      linea(x0, y0, x, f(x));
    x0 = x; // memorizzo il valore precedente
    y0 = f(x);
    //punto (x,f(x));
  }
}*/

colore("#aa0000")
//plotta2((x) => x**2, -5, 5);

//let f = x => 1/10*x**2 - 2*x - 10
colore("#00aa00")
//plotta2(f,-50,50)

// esercizio: altra parabola
//f = (x) => (x+0.1)**2;
//plotta2(f,-5,5);
//trovaMin(f, -5,5,0.01);

/*plotta2(x => Math.log(x), 0, 50, 0.1)
colore("#0000aa")
plotta2(x => x**2, 0, 50, 1)
colore("#00aa00")
plotta2(x => Math.pow(2,x), 0, 50, 1)
plotta2(x => 3*x+2, 0, 50, 1)
colore("#aa0000")
plotta2(x => x*Math.log(x), 0, 50, 1)
*/

// calcolo degli zeri di una funzione (teorema degli zeri) - iterativo e ricorsivo
/*function zeri(f,a,b,step) {
  let x0, y0; // qui sia x0 che y0 sono undefined
  
  //base della ricorsione
  if (step < 0.0001)
    return;

  for (var x = a; x <= b; x=x+step) {
    if (x0 != undefined) 
      if (f(x0)*f(x) < 0) {
        console.log(`esiste uno zero tra ${x0} e ${x}`);
        // ricorsione
        zeri(f,x0,x,step/10);
      }
    x0 = x; // memorizzo il valore precedente
    y0 = f(x);
  }
}*/

//f = (x) => 3*(x**2) + 5*x -3;
//plotta2(f,-20,20,1);
//zeri(f,-20,20,1);
/*zeri(f,-3,-2,0.1);
zeri(f,-2.19,-2.09,0.01);
zeri(f,-2.14,-2.13,0.001);*/


// reciproco di una funzione
/*function reciproco (f) {
  return (x => 1/f(x));
}*/

//var reciproco = (f) => (x => 1/f(x));


// composizione di funzioni
/*function composizione (f,g) {
  return (x => f(g(x)));
}

var composizione = (f,g) => (x => f(g(x)));*/

// somma di funzioni

//var sommaF = (f,g) => (x => f(x) + g(x));

function sommaF2 (f,g) {
  return function(x) {
    return f(x) + g(x);
  }

  /*
  let z = (x) => f(x) + g(x); 
  return z;
  */

  /*
  return (x) => f(x) + g(x);
  */
}

//let y = sommaF2(x=>x**2, x=>2*x);
//console.log(y(2));

//console.log( sommaF2(x=>x**2, x=>2*x)(2) );

//intersezione di funzioni come zeri della differenza (ad es. fra cos e x+5)

/*var diff = (f,g) => (x => f(x) - g(x));

plotta2(x=>Math.cos(x), -10, 10, 1)
plotta2(x=>x+5, -10, 10, 1)

zeri(diff(x=>Math.cos(x),x=>x+5), -10, 10, 1 );*/