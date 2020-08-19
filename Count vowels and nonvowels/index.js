function myfun() {
	let input = document.getElementById('inp').value;

	let newStr = input.replace(/[aoiue]/gi, '');
	document.getElementById('par').innerHTML = newStr;
	document.getElementById('par').style.visibility = 'visible';
	document.getElementById('par').style.width = '300px';
}

function countVow() {
	var input = document.getElementById('inp').value;

	let vowelList = 'auioeAOUIE';
	let vowcont = 0;
	for (let i = 0; i < input.length; i++) {
		if (vowelList.indexOf(input[i]) !== -1) {
			vowcont++;
		}
	}
	document.getElementById('par2').style.visibility = 'visible';
	document.getElementById('par2').innerHTML = vowcont;
}

function nonVowcont() {
	var input = document.getElementById('inp').value;

	let vowelList = 'auioeAOUIE';
	let vowcont = 0;
	for (let i = 0; i < input.length; i++) {
		if (vowelList.indexOf(input[i]) === -1) {
			vowcont++;
		}
	}
	document.getElementById('par3').style.visibility = 'visible';
	document.getElementById('par3').innerHTML = vowcont;
}
