const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const message = document.getElementById('message')
const contract = document.getElementById('contract')
const queries = Array.from(document.getElementsByName('query'))

document.querySelector('form').addEventListener('submit', checkValues)
function checkValues(e){
    e.preventDefault()
    
    // firstName error
    if (!firstName.value.trim()) {
        errorShow(firstName, "This field is required", true)
    }else{
        errorShow(firstName)
    }

    // lastName error
    if (!lastName.value.trim()) {
        errorShow(lastName, "This field is required", true)
    }else{
        errorShow(lastName)
    }


    // email error
    if (!email.value.trim()) {
        errorShow(email, "This field is required", true)
    }else errorShow(email)
    
    // query error
    let isChecked = false
        for (let i = 0; i < queries.length; i++) {
            if (queries[i].checked) {
                isChecked = true
                break
            }
        }

        if (!isChecked) {
            errorShow(queries[0].parentElement.parentElement, "This field is required", true)
        }else{
            errorShow(queries[0].parentElement.parentElement)
        }


    // message error
    if (!message.value.trim()) {
        errorShow(message, "This field is required", true)
    }else if(message.value.trim().length < 3){
        errorShow(message, "This field Must contain 3 character", true)
    }else errorShow(message)


    // contract error
    if (contract.checked) {
        errorShow(contract)
    }else errorShow(contract, "To submit this form, please consent to being contacted", true)

    showSuccess()
}

function errorShow(elm, message, err){
    if (err) {
        const parentElm =  elm.parentElement
        const errorField = parentElm.querySelector('.error')
        errorField.textContent = message
        parentElm.classList.add('problem')
    }else{
        elm.parentElement.classList.remove('problem')
    }
}


function showSuccess() {
    const errorFields = document.querySelectorAll('.inputField.problem')

   if (!errorFields.length) {
    document.getElementById('successAlert').classList.add('success')
   }

   const TextinputFields = [firstName, lastName, email, message]
   TextinputFields.map((input) => input.value = "")

   queries.forEach((query) => {
    if(query.checked){
        query.checked = false
    }
   })

   contract.checked = false
}