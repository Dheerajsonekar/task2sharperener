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

 const api_url = "https://crudcrud.com/api/069c830bfc924c29bd833e20fa75cbb1/VoterList";

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
        totalCount++;
        totalVote.textContent= totalCount;
        showVoterDetails(voterDetails);

        


    })
    .catch((err)=>{
        console.log(err);
    })


form.reset();
 })
 

 function showVoterDetails(details){

    if(details.option=='ram'){
        ramCount++;
        voteRam.textContent = ramCount;  
        const newlist = document.createElement('li');
        newlist.innerHTML= details.name +" "+ '<button class="delete-btn">Delete</button>';
        ramList.appendChild(newlist); 
    }
    else if(details.option=='shyam'){
        shyamCount++;
        voteShyam.textContent=shyamCount;
        const newlist = document.createElement('li');
        newlist.innerHTML= details.name + " "+ '<button class="delete-btn">Delete</button>';
        shyamList.appendChild(newlist);
    }
    else {
        shivCount++;
        voteShiv.textContent=shivCount;
        const newlist = document.createElement('li');
        newlist.innerHTML= details.name +" "+ '<button class="delete-btn">Delete</button>';
        shivList.appendChild(newlist);
    }
 }

function fetchVoterDetails(){
    
}

 document.querySelector('.delete-btn').addEventListener('click', (event)=>{
    const toDelete = event.target.parentElement;

 })