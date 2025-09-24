export const buttonsClick =() =>{
    console.log('buttonsClick');
}

console.warn("scss not work");

let age = prompt("Склільки тобі")
if(age > 18){
    alert("+");
    alert("Не будь псіхом")

}else if(age < 18)
    alert("Шо,спятіл?");

let q = confirm("Точно?")
    if(!q){
        alert("Невірю")
    }
else if( q == true ){
    alert("Вірю");
}

window.onload = function() {
    console.log("Сторінка та всі ресурси повністю завантажені!");
    function btnClick() {
        alert("Дані успішно відправлені!");
    }
}