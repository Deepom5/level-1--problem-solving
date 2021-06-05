function TotalNumbers(n) {
	while (n != 1) {
		document.write(n + ' ');
		if ((n & 1) != 0) {
			n = 3 * n + 1;
			Total++;
		} else {
			n = parseInt(n / 2, 10);
			Total++;
		}
	}
	document.write(n);
	return Total;
}

let Total = 1;
TotalNumbers(12);
console.log(Total - 1);
document.write('</br>');
document.write(Total - 1);