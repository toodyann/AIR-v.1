export const btnClick = () => {
  alert("Па-па парсель!");
};

document.getElementsByClassName("x-icon")[0].style.display = "none";

document
  .getElementsByClassName("button__about")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("osel-meme")[0].style.display = "inline";

    document.getElementsByClassName("x-icon")[0].style.display = "inline";

    document.getElementsByClassName("button__about")[0].disabled = true;

    document.getElementsByClassName("x-icon")[0].disabled = false;

    alert("Нашо нажав?");
  });

document
  .getElementsByClassName("x-icon")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("osel-meme")[0].style.display = "none";
    document.getElementsByClassName("x-icon")[0].style.display = "none";
    document.getElementsByClassName("x-icon")[0].disabled = false;
    document.getElementsByClassName("button__about")[0].disabled = false;
  });

const js = "JS,успішно завантажено!!!";
console.log(js);
