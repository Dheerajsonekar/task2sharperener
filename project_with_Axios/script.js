const form = document.querySelector("form");
const list = document.querySelector(".list");

const api_url =
  "https://crudcrud.com/api/6a8ea084909a4923bf38a294b2c06f42/appointmentData";

let editingUserID = null;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = this.querySelector("#username").value;
  const email = this.querySelector("#email").value;
  const phone = this.querySelector("#phone").value;

  const userDetails = {
    name: username,
    email: email,
    phone: phone,
  };

  if (editingUserID) {
    axios
      .put(`${api_url}/${editingUserID}`, userDetails)
      .then((response) => {
        console.log("User updated", response.data);
        resetForm();
        fetchAndDisplayUser();
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    axios
      .post(api_url, userDetails)
      .then((response) => {
        console.log("User added", response.data);
        showUserOnScreen(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  form.reset();
  editingUserID = null;
});

window.addEventListener("DOMContentLoaded", fetchAndDisplayUser);

function fetchAndDisplayUser() {
  const data = axios
    .get(api_url)
    .then((response) => {
      list.innerHTML = "";
      response.data.forEach((user) => showUserOnScreen(user));
    })
    .catch((err) => {
      console.log(err);
    });
}

function showUserOnScreen(user) {
  const newList = document.createElement("li");

  newList.setAttribute("data-id", user._id);
  newList.setAttribute("data-name", user.name);
  newList.setAttribute("data-email", user.email);
  newList.setAttribute("data-phone", user.phone);

  newList.innerHTML =
    user.name +
    " " +
    user.email +
    " " +
    user.phone +
    " " +
    '<button class="delete-btn">Delete button</button>' +
    " " +
    '<button class="edit-btn">Edit button</button>';
  list.appendChild(newList);
}

list.addEventListener("click", function (event) {
  event.preventDefault();
  const target = event.target;
  const toDelete = target.closest("li");
  const userID = toDelete.getAttribute("data-id");

  if (event.target.classList.contains("delete-btn")) {
    axios
      .delete(`${api_url}/${userID}`)
      .then((response) => {
        console.log("Data deleted", response.data);
        list.removeChild(toDelete);
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (event.target.classList.contains("edit-btn")) {
    document.querySelector("#username").value =
      toDelete.innerText.split(" ")[0];
    document.querySelector("#email").value = toDelete.innerText.split(" ")[1];
    document.querySelector("#phone").value = toDelete.innerText.split(" ")[2];
    editingUserID = userID;
    
  }
});

function resetForm(){
    form.reset();
    editingUserID = null;
}
