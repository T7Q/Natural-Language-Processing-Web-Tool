function handleSubmit(event) {
    event.preventDefault()

    const data = {}
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkFormData(formText)
    data.url = formText

    console.log("::: Form Submitted :::")
    console.log("value: " +formText)
    console.log("value: " +data.url)

    Client.checkFormData('http://localhost:8085/api', data)
    .then(function(res) {
        //update UI according to response
        Client.updateUI(res);
    })
}

export { handleSubmit }
