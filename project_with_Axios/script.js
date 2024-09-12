const form = document.querySelector('form');
const list = document.querySelector('.list');

const api_url = "https://crudcrud.com/api/6a8ea084909a4923bf38a294b2c06f42/appointmentData";

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
    
    

    axios.post(api_url, userDetails)
    .then((response)=>{
       console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    })

    


    form.reset();
})

window.addEventListener("DOMContentLoaded", () =>{
   
    const data = axios.get(api_url)
    .then((response)=>{
        response.data.forEach(user=> showUserOnScreen(user));
    })
    .catch((err)=>{
        console.log(err);
    })
})

function showUserOnScreen(user){
    const newList = document.createElement('li');

    newList.setAttribute('data-id', user._id);

    newList.innerHTML = user.name +" "+user.email +" "+user.phone +" " +'<button class="delete-btn">Delete button</button>' +" "+'<button class="edit-btn">Edit button</button>';
    list.appendChild(newList);


    list.addEventListener('click', function(event){
        event.preventDefault();
    
        if(event.target.classList.contains('delete-btn')){
            const toDelete = event.target.parentElement;
            const userID = toDelete.getAttribute('data-id');
            axios.delete(`${api_url}/${userID}`)
            .then((response)=>{
               console.log('Data Deleted');
               list.removeChild(toDelete);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    })
}

