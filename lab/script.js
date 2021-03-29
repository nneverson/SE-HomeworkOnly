document.getElementById('button1').onclick = function () {
	document.getElementById('green').style.backgroundColor = 'green';
};

document.getElementById('green').onclick = function () {
	document.getElementById('lucky').innerHTML = `I'm lucky`;
};

// let x = 2;
// let y = 3;
// let z = x + y;
// console.log(z);
a = 4 + 10 + 22 + -30 + 55;
b = a / 5;
console.log(b);

document.getElementById('sum').innerHTML = a;
document.getElementById('avg').innerHTML = b;
