/*
Disegnare il grafico sull’intervallo [-50,50] per la funzione f(x) =
x/2-1
*/

// let p, range = 50;

// for (let x = -range; x <= range; x += 0.01){
//   p = x / 2 + 1;
//   punto(x, p);
// }

/*-----------------------------------------------------------------------------*/

/*
Disegnare il grafico e stimare il minimo della funzione f(x) =
(x+0.1)2

Sperimentare con la precisione per ottenere il minimo
*/

// let min = Infinity, p, range = 50;

// for (let x = -range; x <= range; x += 0.01){
//   p = Math.pow((x + 0.1), 2);
//   if (p < min)
//     min = p;
//   punto(x, p);
// }

// console.log('Min:', min);

/*-----------------------------------------------------------------------------*/

/*
Disegnare i grafici sull’intervallo [0,50] per le funzioni f(x)=log(x),
f(x) = 3x+2, f(x) = x2, f(x)=2x. Quale funzione cresce più velocemente?
*/

let p, range = 50;

for (let x = 0; x <= range; x += 0.01){
  // Log(x)
  colore('blue');
  p = Math.log(x);
  punto(x, p);

  // 3X+2
  colore('red');
  p = (3 * x + 2);
  punto(x, p);

  // X^2
  colore('green');
  p = Math.pow(x, 2);
  punto(x, p);

  // 2^X
  colore('yellow');
  p = Math.pow(2, x);
  punto(x, p);
}

console.log('Min:', min);

/*-----------------------------------------------------------------------------*/