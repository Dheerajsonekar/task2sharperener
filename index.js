const form = document.querySelector('form');

const totalVote = document.querySelector('.vote-count');

const sureshTotalVote = document.querySelector('.count-one');
const depankTotalVote = document.querySelector('.count-two');
const abhikTotalVote = document.querySelector('.count-three');

const sureshVote = document.querySelector('.list-one');
const depankVote = document.querySelector('.list-two');
const abhikVote = document.querySelector('.list-three');

let totalCount = 0;
let sureshCount = 0;
let depankCount = 0;
let abhikCount = 0;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    totalCount += 1;
    totalVote.innerHTML = totalCount;

    const name = document.querySelector('#name').value;
    const option = document.querySelector('#my-option').value;

    const newList = document.createElement('li');
    newList.innerHTML = `${name} voted for ${option} <button class="delete-btn">x</button>`;

    if (option === 'suresh') {
        sureshCount += 1;
        sureshTotalVote.innerHTML = sureshCount;
        sureshVote.appendChild(newList);
    } else if (option === 'depank') {
        depankCount += 1;
        depankTotalVote.innerHTML = depankCount;
        depankVote.appendChild(newList);
    } else {
        abhikCount += 1;
        abhikTotalVote.innerHTML = abhikCount;
        abhikVote.appendChild(newList);
    }

    // Handle the delete functionality for each vote
    newList.querySelector('.delete-btn').addEventListener('click', function () {
        newList.remove();
        totalCount -= 1;
        totalVote.innerHTML = totalCount;

        if (option === 'suresh') {
            sureshCount -= 1;
            sureshTotalVote.innerHTML = sureshCount;
        } else if (option === 'depank') {
            depankCount -= 1;
            depankTotalVote.innerHTML = depankCount;
        } else {
            abhikCount -= 1;
            abhikTotalVote.innerHTML = abhikCount;
        }
    });

    // Clear the input field after voting
    document.querySelector('#name').value = '';
});
