import "../style/background.scss";

const backgroundImage = document.getElementById("backgroundImage");

const addBackground = () => {
  const bgImage = new Image();

  //get an image from api with exact dimensions of the window
  bgImage.src = `${process.env.IMAGE_API}/${window.innerWidth}/${window.innerHeight}`;

  //wait the image load to display the image on the screen
  bgImage.onload = function () {
    //update the src to the url image src
    backgroundImage.src = this.src;

    //animate the entry with js
    backgroundImage.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 100,
        },
      ],
      {
        duration: 1000,
        fill: "forwards",
      }
    );
  };
};

export default addBackground;
