const form = document.querySelector('form');
const list = document.querySelector('.list');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const username = this.querySelector('#username').value;
    const email = this.querySelector('#email').value;
    const phone = this.querySelector('#phone').value;


    const userDetails = {
        name: username,
        email: email,
        phone: phone,
    }
    
    const api_url = "https://crudcrud.com/api/1c1a9a9743ba4530850e3add62ab4d3d/appointmentData";

    axios.post(api_url, userDetails)
    .then((response)=>{
       console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    })

    


    form.reset();
})

