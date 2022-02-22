const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = (user) => { 
  let dataPertemanan = []

        if (username) {
          let dataPertemananFromLS = localStorage.getItem(username)
          if (dataPertemananFromLS) {
            dataPertemanan = JSON.parse(dataPertemananFromLS)
          }
        }
        let isFollowed = false

        for (let i = 0; i < dataPertemanan.length; i++) {
          if (dataPertemanan[i] === user.login) {
            isFollowed = true
          }
        }
 };

elFormUsername.onsubmit = (e) => {
  e.preventDefault();
};