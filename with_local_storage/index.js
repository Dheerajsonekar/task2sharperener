 
 const form = document.querySelector('form');
 const list = document.querySelector('.list');


 form.addEventListener('submit', function(event){
    event.preventDefault();
   
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phone').value;
   

    const newList = document.createElement('li');
    newList.innerHTML= name + email + phone + '<button class="delete-btn">x</button> <button class="edit-btn">edit</button>'
    list.appendChild(newList);    

    const userDetails = {
        name: name,
        email: email,
        phone: phone,

    }
   
    const users = JSON.parse(localStorage.getItem('Users')) || [];

    users.push(userDetails);

    localStorage.setItem('Users', JSON.stringify(users));
 
    displayUserList();

    form.reset();
 })

 function displayUserList(){
   
    list.innerHTML = '';

    const users = JSON.parse(localStorage.getItem('Users')) || [];

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = user.name + " " + user.email + " " + user.phone +" " + '<button class="delete-btn">x</button>'+" "+'<button class="edit-btn">edit</button>';
        list.appendChild(li);
    })
 }

 list.addEventListener('click', function(event){
  event.preventDefault();
  
   if(event.target.classList.contains('delete-btn')){
    const toBeDeleted = event.target.parentElement;
    const userList = Array.from(list.children);
    const index = userList.indexOf(toBeDeleted);

    

    const users = JSON.parse(localStorage.getItem('Users')) || [];

    if(index > -1){
        users.splice(index, 1);
        list.removeChild(toBeDeleted);
    }
    localStorage.setItem('Users', JSON.stringify(users));

    
   }
 })

 list.addEventListener('click', function(event){
    event.preventDefault();

    if(event.target.classList.contains('edit-btn')){
        const toBeEdited = event.target.parentElement;
        const userList = Array.from(list.children);
        const index = userList.indexOf(toBeEdited);

        const users = JSON.parse(localStorage.getItem('Users')) || [];

        const user = users[index];
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone;

        list.removeChild(toBeEdited);
        users.splice(index, 1);

        localStorage.setItem('Users', JSON.stringify(users));
    }
 })

//  document.getElementById('filter').addEventListener('input', function(event){
//     event.preventDefault();

//     const enterText = event.target.value.toLowerCase();
//     const allList = document.querySelectorAll('.list li');
    
//     allList.forEach(function(items){
//         const fname = items.firstChild.textContent.toLowerCase();
//         if(fname.includes(enterText)){
//             items.style.display = '';
//         }
//         else {
//             items.style.display = 'none';
//         }
//     })
//  })

 displayUserList();