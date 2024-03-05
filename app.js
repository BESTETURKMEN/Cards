const cardInfos = [
    {
        id: "1",
        photo: "img_avatar.png",
        title: "John Doe",
        job: "Architect & Engineer"
    },
    {
        id: "2",
        photo: "img_avatar2.png",
        title: "Jane Doe",
        job: "Interior Designer"
    },
    {
        id: "3",
        photo: "img_avatar2.png",
        title: "Beste Türkmen",
        job: "Police Officer"
    },
    {
        id: "4",
        photo: "img_avatar2.png",
        title: "Zeynep Şentürk",
        job: "Police Officer"
    },
    {
        id: "5",
        photo: "img_avatar.png",
        title: "Emre Kabdan",
        job: "Software Engineer"
    },

]

const cards = document.getElementById("cards")
const clickCard = document.getElementById("clickCard")




const handleOpen = (item) => {

    const content = document.createElement("div");
    content.id="content"
    const closebtn = document.createElement("span");
    closebtn.className = "closebtn"
    closebtn.innerText = "x"
    closebtn.addEventListener("click", () => handleClose(item))

    cards.appendChild(clickCard)
    clickCard.appendChild(content)
    content.appendChild(closebtn);
    clickCard.appendChild(content);

    const img = document.createElement("img");
    img.setAttribute("src", item.photo);
    content.appendChild(img);

    const title = document.createElement("div");
    title.innerText = item.title;
    content.appendChild(title);

    const job = document.createElement("div");
    job.innerText = item.job;
    content.appendChild(job);

    clickCard.innerHTML = '';
    clickCard.appendChild(content);


};


const handleClose = () => {
    content.style.display="none"
}

cardInfos.map((item) => {
    const card = document.createElement("div")
    card.id = "card"
    const container = document.createElement("div")
    container.id = "container"


    const photo = document.createElement("img")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    const button = document.createElement("button")


    photo.setAttribute("src", item.photo)
    h3.innerText = item.title
    p.innerText = item.job
    button.innerText = "click me"


    container.appendChild(photo)
    container.appendChild(h3)
    container.appendChild(p)
    container.appendChild(button)


    button.addEventListener("click", () => handleOpen(item))

    card.appendChild(container)
    cards.appendChild(card)

})





