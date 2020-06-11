const updateUI = async () => {
	const request = await fetch('/api');
	try {
	  const data = await request.json();
	  document.getElementById('polarity').innerHTML = "hello";
	  document.getElementById('subjectivity').innerHTML = data.subjectivity;
	  document.getElementById('polarity_confidence').innerHTML = data.polarity_confidence;
	  document.getElementById('subjectvity_confidence').innerHTML = data.subjectvity_confidence;
	  document.getElementById('text').innerHTML = data.text;
	} catch(error) {
	  console.log("error", error);
	}
  }

export { updateUI }