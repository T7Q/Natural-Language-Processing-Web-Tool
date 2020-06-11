const updateUI = (data) => {
	document.getElementById('polarity').innerHTML = data.polarity;
	document.getElementById('polarity_confidence').innerHTML = data.polarity_confidence;
	document.getElementById('subjectivity').innerHTML = data.subjectivity;
	document.getElementById('subjectivity_confidence').innerHTML = data.subjectivity_confidence;
	document.getElementById('text').innerHTML = data.text;
  }

export { updateUI }