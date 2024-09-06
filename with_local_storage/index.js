 
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
   
    list.removeChild(toBeDeleted);
    
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