function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText);
    if (!Client.checkForName(formText) ){
        document.getElementById('results').innerHTML = "Please enter valid URL"
        return ;
    }else {
        document.getElementById('results').innerHTML = "Please wait .."
    }

   /* console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
*/
   
    fetch('http://localhost:8081/getData',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({url: formText})
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = JSON.stringify(res)
    })

}

    export { handleSubmit }
