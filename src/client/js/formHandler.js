function handleSubmit(event) {
    event.preventDefault()

    const data = {}
    // save user input to formText
    let formText = document.getElementById('name').value
    data.url = formText

    console.log("::: Form Submitted :::")
    console.log("value: " +data.url)

    Client.checkFormData('http://localhost:3000/api', data)
    .then(function(res) {
        
        //update UI according to 
        Client.updateUI(res);
    })
}

export { handleSubmit }
