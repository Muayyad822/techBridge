page = document.getElementsByClassName("page")

newName = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Muiz")
    }, 1000);
});


const greeting = async () => {
    page[0].textContent = "...loading";
    page[0].style = "text-align:center";
    // name = await newName;
    // page[0].textContent = "welcome " + name
}