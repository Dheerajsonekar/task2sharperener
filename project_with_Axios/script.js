const form = document.querySelector('form');
const list = document.querySelector('.list');

const api_url = "https://crudcrud.com/api/1c1a9a9743ba4530850e3add62ab4d3d/appointmentData";

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

window.addEventListener('DOMContentLoaded', () =>{
    const data = axios.get(api_url)
    .then((response)=>{
        for(let i=0; i<response.data.length; i++){
            showUserOnScreen(response.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})

function showUserOnScreen(user){
    const newList = document.createElement('li');
    newList.innerHTML = user.name +" "+user.email +" "+user.phone +" " +'<button class="delete-btn">Delete button</button>' +" "+'<button class="edit-btn">Edit button</button>';
    list.appendChild(newList);
}

