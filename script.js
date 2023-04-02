/*
Disegnare il grafico sull’intervallo [-50,50] per la funzione f(x) =
x/2-1
*/

// let p, range = {"a" : -50, "b" : 50}, step = 0.01;

// for (let x = range.a; x <= range.b; x += , step){
//   p = x / 2 + 1;
//   dot(x, p);
// }

/*-----------------------------------------------------------------------------*/

/*
Disegnare il grafico e stimare il minimo della funzione f(x) =
(x+0.1)2

Sperimentare con la precisione per ottenere il minimo
*/

// let min = Infinity, p, range = {"a" : -50, "b" : 50}, step = 0.01;

// for (let x = range.a; x <= range.b; x += step){
//   p = Math.pow((x + 0.1), 2);
//   if (p < min)
//     min = p;
//   dot(x, p);
// }

// console.log('Min:', min);

/*-----------------------------------------------------------------------------*/

/*
Disegnare i grafici sull’intervallo [0,50] per le funzioni f(x)=log(x),
f(x) = 3x+2, f(x) = x2, f(x)=2x. Quale funzione cresce più velocemente?
*/

// let p, range = {"a" : 0, "b" : 50}, step = 0.01;

// for (let x = range.a; x <= range.b; x += step){
//   // Log(x)
//   color('blue');
//   p = Math.log(x);
//   dot(x, p);

//   // 3X+2
//   color('red');
//   p = (3 * x + 2);
//   dot(x, p);

//   // X^2
//   color('green');
//   p = Math.pow(x, 2);
//   dot(x, p);

//   // 2^X
//   color('yellow');
//   p = Math.pow(2, x);
//   dot(x, p);
// }

/*-----------------------------------------------------------------------------*/

/*
Disegnare il grafici di una funzione utilizzando la primitiva linea
*/

// let p, range = {"a" : -50, "b" : 50}, step = 0.01, x0, f = x => Math.log(Math.atan(Math.abs(x) / (x + 1)));

// for (let x = range.a; x <= range.b; x += step){
//   if (x0 != undefined) line(x, f(x), x0, f(x0));
//   x0 = x;
// }

/*-----------------------------------------------------------------------------*/

/*
calcolo degli zeri di una funzione (teorema degli zeri)
*/

// function zero(f, r, s){
//   let p = (r.b - r.a) / 2;  
//   if ()
// }

// zero(x => Math.log(Math.atan(Math.abs(x) / (x + 1))), {"a" : -50, "b" : 50}, 0.01)

/*-----------------------------------------------------------------------------*/