export function handleSubmit(event) {
    event.preventDefault()

    const data = {}
    // save user input to formText
    let formText = document.getElementById('name').value
    
    // regex to check if entered data is a URL
    const re = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);

    // if entered data is URL proceed, else show alert
    if (re.test(formText)){
        data.url = formText
        Client.postFormData('http://localhost:3000/api', data)
        .then(function(res) {
            //update UI according to 
            Client.updateUI(res);
        })
    }
    else {
        alert("ERROR! Please enter a URL")
        console.log("Invalid");
    }
}