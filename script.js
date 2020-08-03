$(document).ready(function() {

	let progressBar = $('#bar').width();
	console.log('script ready', progressBar);
	$('.btn1').click(function boostOne() {
		let newProgressBar = progressBar*1.01;
		console.log('bla bla', newProgressBar);
		$('#bar').width(newProgressBar);
		progressBar=newProgressBar;
		});

	$('.btn2').click(function boostTwo() {
		let newProgressBar = progressBar*1.03;
		console.log('bla bla', newProgressBar);
		$('#bar').width(newProgressBar);
		progressBar=newProgressBar;
		});

	$('.btn3').click(function boostThree() {
		let newProgressBar = progressBar*1.07;
		console.log('bla bla', newProgressBar);
		$('#bar').width(newProgressBar);
		progressBar=newProgressBar;
		});


});