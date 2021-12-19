import apiCall from "./apiCall.js";
import addBackground from "./addBackground.js";

//import style file with dynamic path
import "@style/portfolio.scss";

const profileImage = document.getElementById("profile-image");
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");

//Draw in the html the result of randomuser
const generatePortfolio = () => {

  apiCall(process.env.PROFILE_API)
    .then((data) => {
      const profile = data.results[0];

      //change values from template
      profileImage.src = profile.picture.large;
      profileName.innerHTML = `${profile.name.first} ${profile.name.last}`;
      profileEmail.innerHTML = profile.email;
      
      addBackground();
    })
    .catch((err) => {
      profileName.innerHTML = "Error :(";
    });
};

export default generatePortfolio;
