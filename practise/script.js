 
 const form = document.getElementsByTagName('form')[0];
 const fruit = document.getElementsByClassName('fruit')[0];






 form.addEventListener('submit', function(event){
    event.preventDefault();
   
   const name = document.getElementById('name').value;
   

    const newList = document.createElement('li');
    newList.innerHTML= name + '<button class="delete-btn">x</button> <button class="edit-btn">edit</button>'
    fruit.appendChild(newList);    

    const fruitName = {
        name: name,

    }
    
    
    form.reset();
 })

 fruit.addEventListener('click', function(event){
  event.preventDefault();
  
   if(event.target.classList.contains('delete-btn')){
    const toBeDeleted = event.target.parentElement;
   
    fruit.removeChild(toBeDeleted);
    
   }
 })

 document.getElementById('filter').addEventListener('input', function(event){
    event.preventDefault();

    const enterText = event.target.value.toLowerCase();
    const allList = document.querySelectorAll('.fruit li');
    
    allList.forEach(function(items){
        const fname = items.firstChild.textContent.toLowerCase();
        if(fname.includes(enterText)){
            items.style.display = '';
        }
        else {
            items.style.display = 'none';
        }
    })
 })

 