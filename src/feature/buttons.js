export const btnClick = () => {
  alert("Па-па парсель!");
};

const x_button = document.getElementsByClassName("x-icon")[0];
const button__about =  document.getElementsByClassName("button__about")[0];
const image =  document.getElementsByClassName("osel-meme")[0];

x_button.style.display = "none";

button__about.addEventListener("click", function () {
    image.style.display = "inline";

    x_button.style.display = "inline";

    button__about.disabled = true;

    x_button.disabled = false;

    alert("Нашо нажав?");
  });

    x_button.addEventListener("click", function () {

    image.style.display = "none";

    x_button.style.display = "none";

    x_button.disabled = false;

    button__about.disabled = false;
  });

const js = "JS,успішно завантажено!!!";
console.log(js);
