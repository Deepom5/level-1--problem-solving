function perfectNumber(number) {
	var temp = 0;
	for (var i = 1; i <= number / 2; i++) {
		if (number % i === 0) {
			temp += i;
			console.log(temp);
		}
	}

	if (temp === number && temp !== 0) {
		console.log('It is a perfect number.');
	} else {
		console.log('It is not a perfect number.');
	}
}

perfectNumber(28);