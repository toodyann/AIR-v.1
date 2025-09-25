export const buttonsClick = () => {
    console.log('buttonsClick');
}
export const btnClick = () => {
    console.log("Дані успішно відправлені!!!");
}

let age = prompt("Склільки тобі")
if (age > 18) {
    alert("+");
    alert("Не будь псіхом")

} else if (age < 18)
    alert("Шо,спятіл?");

let q = confirm("Точно?")
if (!q) {
    alert("Невірю")
}
else if (q == true) {
    alert("Вірю");
}



