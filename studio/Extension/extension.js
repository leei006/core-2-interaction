let everything = document.querySelectorAll("*");

for(let thing of everything){
    thing.classList.add("img-change");
    thing.src = "https://i0.wp.com/thefightmag.com/wp-content/uploads/2023/04/000-DREW-STARKEY.png?fit=570%2C549&ssl=1"
    thing.srcset = "https://i0.wp.com/thefightmag.com/wp-content/uploads/2023/04/000-DREW-STARKEY.png?fit=570%2C549&ssl=1"
}
console.log(allImg);