//Add Button
let addButton = document.querySelector(`#addButton`);
addButton.addEventListener("click",function(){
    addButton.classList.add(`orange-button`)
});

//Remove Button
let removeButton = document.querySelector(`#removeButton`);
removeButton.addEventListener("click",function(){
    addButton.classList.remove(`orange-button`, `orange-and-red`)
});

//Replace Button
let replaceButton = document.querySelector(`#replaceButton`);
replaceButton.addEventListener("click",function(){
    addButton.classList.replace(`orange-button`, `orange-and-red`)
});

// Item Button
let itemButton = document.querySelector(`#itemButton`);
itemButton.addEventListener("click",function(){
    alert(document.querySelector("p").classList.item(0))
});

// Contains Button
let containClass = document.querySelector(`#containClass`)
containClass.addEventListener("click",function(){
    alert(document.querySelector("p").classList.contains(`classList`))
})