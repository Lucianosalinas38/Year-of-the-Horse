const buttons = document.getElementsByClassName("button-50");
const imageContainer = document.getElementById("image-container");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const imageSetId = buttons[i].getAttribute("data-images");
    showImageSet(imageSetId);
  });
}

function showImageSet(imageSetId) {
  const imageSets = document.getElementsByClassName("image-set");
  for (let i = 0; i < imageSets.length; i++) {
    const imageSet = imageSets[i];
    if (imageSet.id === imageSetId) {
      imageSet.style.display = "grid";
    } else {
      imageSet.style.display = "none";
    }
  }
  const headers = imageContainer.getElementsByTagName("h2");
  for (let i = 0; i < headers.length; i++) {
    headers[i].style.display = "none";
  }
  const selectedHeader = imageContainer.querySelector(`#${imageSetId} h2`);
  selectedHeader.style.display = "block";
}

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");

button1.addEventListener("click", () =>
  changeBackgroundImage("url(backgrounds/tech-thunder.gif)")
);
button2.addEventListener("click", () =>
  changeBackgroundImage("url(/backgrounds/studio-ghibli.gif)")
);
button3.addEventListener("click", () =>
  changeBackgroundImage("url(/backgrounds/drive.gif)")
);
button4.addEventListener("click", () =>
  changeBackgroundImage("url(/backgrounds/plan.gif)")
);
button5.addEventListener("click", () =>
  changeBackgroundImage("url(/backgrounds/action.gif)")
);
button6.addEventListener("click", () =>
  changeBackgroundImage("url(/backgrounds/develop.gif)")
);
button7.addEventListener("click", () =>
  changeBackgroundImage("url(/backgrounds/warm.gif)")
);
button8.addEventListener("click", () =>
  changeBackgroundImage("url(/backgrounds/ai.gif)")
);

function changeBackgroundImage(imageUrl) {
  document.body.style.backgroundImage = imageUrl;
}
