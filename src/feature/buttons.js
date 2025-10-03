export const btnClick = () => {
  alert("Па-па парсель!");
};

const xButton = document.querySelector(".xIcon");
const heroMainButton =  document.querySelector(".heroMainButton");
const memeImage =  document.querySelector(".memeImage");

xButton.style.display = "none";

const addImage = () => { 
    memeImage.style.display = "inline";
    
    xButton.style.display = "inline";
    
    heroMainButton.disabled = true;
    
    xButton.disabled = false;
    
   
}

const showMessage = () => {
    alert("Для чого натиснув?");
}

const removeImage = () => {
    memeImage.style.display = "none";

    xButton.style.display = "none";

    xButton.disabled = true;

    heroMainButton.disabled = false;
    
}

const onHeroButtonClick = () => {
    addImage();
    showMessage();
}

heroMainButton.addEventListener("click", onHeroButtonClick);

xButton.addEventListener("click", removeImage);

const js = "JS,успішно завантажено!!!";
console.log(js);
