const updateUI = (data) => {
	// if (data.url === null) {
    //     alert('Remember to input a valide URL');
    //     return false;
    // }
	document.getElementById('polarity').innerHTML = data.subjectivity.polarity;
	document.getElementById('subjectivity').innerHTML = data.subjectivity;
	document.getElementById('polarity_confidence').innerHTML = data.polarity_confidence;
	document.getElementById('subjectvity_confidence').innerHTML = data.subjectvity_confidence;
	document.getElementById('text').innerHTML = data.text;
  }

export { updateUI }