function showme() {
	const picnum = Math.floor((Math.random() * 34) + 0);
	console.log(picnum);
	const picurl = 'media/zamel'+picnum;
	console.log(picurl);
	document.getElementById('sexyzamel').src=picurl;
}

window.onload = showme;