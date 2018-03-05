// random 1-100
// let x = Math.floor (Math.random()*100);
// document.write(x);
// document.write('<br>');

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const d = b*b-4*a*c;
document.write('diskr D = ' + d);
document.write('<br>');

if (d == 0) {
  let x0=(-b/(2*a));
	document.write('x1,x2 = ' + x0);
	document.write('<br>');
} else if (d > 0) {
	let x1=(-b+(Math.sqrt(d)))/(2*a);
	let x2=(-b-(Math.sqrt(d)))/(2*a);
	document.write('x1 = ' + x1);
	document.write('<br>');
	document.write('x2 = ' + x2);
	document.write('<br>');
} else if (d < 0) {
    document.write('There is no answer, because diskr D < 0');
} else {
	console.log('I don`t know how to count it');
    document.write('I don`t know how to count it');
}