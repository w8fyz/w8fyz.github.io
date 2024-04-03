class Veille {

    constructor(name, link, date, image = "default-veille.jpg") {
        this.name = name;
        this.date = date;
        this.image = image;
        this.link = link;
    }

    asComponent() {

        return '<div class="veille-impl">' +
            '<img alt="'+this.name+'" src="assets/img/veilles/'+this.image+'">' +
            '<a href="'+this.link+'">'+this.name+'</a>'
            +'<p>'+this.date+'</p>'
            +'</div>'
    }
}

let veilles = [
    new Veille("API Bukkit très stabilisée tavu le truc", "https://google.com", "03/04/2023"),
]


let veilles_container = document.getElementById("veille-container");

veilles.forEach((veille) => {
    veilles_container.insertAdjacentHTML('beforeend',
        veille.asComponent())
})

document.querySelectorAll(".veille-impl").forEach((veille) => {
    let link = veille.querySelector("a").href;
    veille.addEventListener("click", () => {
        window.open(link);
    })
})