const apiURL = 'https://atom-butternut.glitch.me/form'

/**
 * Send Request to Backend to Process Request, and invite user to Slack     
 */
const submitSlackInfo = async function(){
    // Get the information from the form
    const fName = document.querySelector('#firstName').value
    const lName = document.querySelector('#lastName').value
    const email = document.querySelector('#email').value
    // Get Captcha Response
    const captchaResponse = grecaptcha.getResponse();

    // Set the data in an Object
    const data = {
        "firstName": fName,
        "lastName": lName,
        "email": email,
        "g-recaptcha-response": captchaResponse
    }

    // Fetch the Request to the server
    const response = await fetch(apiURL, 
        {
            method: 'POST',
            body: JSON.stringify(data),
             headers: {
                'Content-Type': 'application/json'
             }
        }
    )
    const responseData = await response.json()
    console.log(responseData)
    // Send Status for the Dialog to display
    displayDialog(responseData['ok'], responseData['error'])
}


/*
  * Edit the Dialog to show if the invitation succedeed or not.
  * @param {string} status - True, False if the request was succesfull
  * @param {string} extra - Variable if there are any errors.
*/
const displayDialog = function(status, extra){
    const alert = document.querySelector('.alert')
    if(status == true){
        alert.innerText = 'Invited to Slack! Check your email'
        alert.classList.add('alert-success')
        alert.classList.remove('alert-danger')
    }
    else{   
        alert.innerText = `There was an error inviting you to Slack! Try again. Error code: ${extra}`
        alert.classList.add('alert-danger')
        alert.classList.remove('alert-success')
    }
    alert.style.display = 'block';
}
