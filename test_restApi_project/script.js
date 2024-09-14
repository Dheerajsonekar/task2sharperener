 
 
 
 
 const form = document.querySelector('form');
 
 const ramList = document.querySelector('.ramList');
 const shyamList = document.querySelector('.shyamList');
 const shivList = document.querySelector('.shivList');
 
 const totalVote = document.querySelector('#voteCount');
 const voteRam = document.querySelector('#voteCount1');
 const voteShyam = document.querySelector('#voteCount3');
 const voteShiv = document.querySelector('#voteCount2');

 let totalCount =0;
 let ramCount =0;
 let shyamCount = 0;
 let shivCount =0;

 const api_url = "https://crudcrud.com/api/91ffa4a230c7476eb111ddff7bc65c66/VoterList";

 form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const voter = document.querySelector('#name').value;
    const option = document.querySelector('#selectOption').value;

    const voterDetails = {
        name: voter,
        option : option,
    }

    axios.post(api_url, voterDetails)
    .then((response) => {
        console.log('voter added', response.data);
       
        showVoterDetails(voterDetails, response.data._id);

        


    })
    .catch((err)=>{
        console.log(err);
    })


form.reset();
 })
 

 function showVoterDetails(details, id){

    if(details.option=='ram'){
        totalCount++;
        totalVote.textContent= totalCount;
        ramCount++;
        voteRam.textContent = ramCount;  
        const newlist = document.createElement('li');
        newlist.setAttribute('data-id', id);
        newlist.innerHTML= details.name +" "+ '<button class="delete-btn">Delete</button>';
        ramList.appendChild(newlist); 
    }
    else if(details.option=='shyam'){
        totalCount++;
        totalVote.textContent= totalCount;
        shyamCount++;
        voteShyam.textContent=shyamCount;
        const newlist = document.createElement('li');
        newlist.setAttribute('data-id', id);
        newlist.innerHTML= details.name + " "+ '<button class="delete-btn">Delete</button>';
        shyamList.appendChild(newlist);
    }
    else {
        totalCount++;
        totalVote.textContent= totalCount;
        shivCount++;
        voteShiv.textContent=shivCount;
        const newlist = document.createElement('li');
        newlist.setAttribute('data-id', id);
        newlist.innerHTML= details.name +" "+ '<button class="delete-btn">Delete</button>';
        shivList.appendChild(newlist);
    }
 }

function fetchVoterDetails(){
    axios.get(api_url)
    .then((response)=>{
        console.log('fetched successfully', response.data);
        shyamList.innerHTML='';
        ramList.innerHTML='';
        shivList.innerHTML='';
        response.data.forEach((voter)=>{
            showVoterDetails(voter, voter._id);
        } )
    })
}

ramList.addEventListener('click', (event)=>{
   
    if(event.target.classList.contains('delete-btn')){
        const toDelete = event.target.parentElement;
        const voterId = toDelete.getAttribute('data-id');

        axios.delete(`${api_url}/${voterId}`)
        .then((response)=>{
            console.log('data deleted succesfully', response.data);

            ramList.removeChild(toDelete);
            ramCount--;
            totalCount--;
            totalVote.textContent=totalCount;
            voteRam.textContent=ramCount;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

 })
shivList.addEventListener('click', (event)=>{
   
    if(event.target.classList.contains('delete-btn')){
        const toDelete = event.target.parentElement;
        const voterId = toDelete.getAttribute('data-id');

        axios.delete(`${api_url}/${voterId}`)
        .then((response)=>{
            console.log('data deleted succesfully', response.data);

            shivList.removeChild(toDelete);
            shivCount--;
            totalCount--;
            totalVote.textContent=totalCount;
            voteShiv.textContent = shivCount;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

 })
shyamList.addEventListener('click', (event)=>{
   
    if(event.target.classList.contains('delete-btn')){
        const toDelete = event.target.parentElement;
        const voterId = toDelete.getAttribute('data-id');

        axios.delete(`${api_url}/${voterId}`)
        .then((response)=>{
            console.log('data deleted succesfully', response.data);

            shyamList.removeChild(toDelete);
            shyamCount--;
            totalCount--;
            totalVote.textContent=totalCount;
            voteShyam.textContent=shyamCount;

        })
        .catch((err)=>{
            console.log(err);
        })
    }

 })

 window.addEventListener("DOMContentLoaded", fetchVoterDetails);