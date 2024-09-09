const form= document.querySelector('form');
const list = document.querySelector('.expense-list')


form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const amount = document.querySelector('#amount').value;
    const description = document.querySelector('#description').value;
    const category = document.querySelector('#category').value;
    
    const li = document.createElement('li');
    li.innerHTML = amount +" "+ description +" " + category+ " " + '<button class="delete-btn" >Delete</button>' +" "+ '<button class="edit-btn">Edit</button>';
     
    const expenseDetail = {
        amount : amount,
        description: description,
        category : category,
    }

    const expense = JSON.parse(localStorage.getItem("Expenses")) || [];
    expense.push(expenseDetail);

    localStorage.setItem("Expenses", JSON.stringify(expense));

    list.appendChild(li);
    
    form.reset();
})

list.addEventListener('click', function(event){
    event.preventDefault();

    if(event.target.classList.contains('delete-btn')){
       const toBeDeleted = event.target.parentElement;
       const expense =  JSON.parse(localStorage.getItem('Expenses')) || [];

       const expenseList = Array.from(list.children);
       const indexOf = expenseList.indexOf(toBeDeleted);
       
       if(indexOf > -1){
          expense.splice(indexOf, 1);
          list.removeChild(toBeDeleted);
       }

       localStorage.setItem('Expenses', JSON.stringify(expense));
       
       
       


    }
})

list.addEventListener('click', function(event){
    event.preventDefault();

    if(event.target.classList.contains('edit-btn')){
        const toBeEdited = event.target.parentElement;
        const expenseList = Array.from(list.children);
        const indexOf = expenseList.indexOf(toBeEdited);

        const expense = JSON.parse(localStorage.getItem('Expenses')) || [];
        const indexExpense = expense[indexOf];
        if(indexOf > -1){
            document.querySelector('#amount').value = indexExpense.amount;
            document.querySelector('#description').value = indexExpense.description;
            document.querySelector('#category').value = indexExpense.category;

            expense.splice(indexOf, 1);
            list.removeChild(toBeEdited);

            localStorage.setItem("Expenses", JSON.stringify(expense));
        }
    }
})
