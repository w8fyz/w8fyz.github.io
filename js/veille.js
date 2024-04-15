class Veille {

    constructor(name, link, date, author, image = "default-veille.jpg") {
        this.name = name;
        this.author = author;
        this.date = date;
        this.image = image;
        this.link = link;
    }

    asComponent() {

        return '<div class="veille-impl">' +
            '<img alt="'+this.name+'" src="assets/img/veilles/'+this.image+'">' +
            '<a href="'+this.link+'">'+this.name+'</a>'
            +'<div class="veille-meta"><p>'+this.date+'</p><p>Par '+this.author+'</p></div>'
            +'</div>'
    }
}

let veilles = [
    new Veille("Clone de l'ancien repo de CraftBukkit", "https://hub.spigotmc.org/stash/projects/SPIGOT/repos/craftbukkit/commits?until=refs%2Fheads%2Fversion%2F1.8", "21/12/2010 - aujourd'hui", "Dinnerbone"),
    new Veille("Repo et documentation des projets liés à Spigot", "https://hub.spigotmc.org/stash/projects/SPIGOT/", "09/09/2022 - aujourd'hui", "md5"),
    new Veille("10 ans de SpigotMC", "https://www.spigotmc.org/threads/celebrating-10-years-of-spigotmc.579779/", "21/11/2022", "md5"),
    new Veille("Spigot & BungeeCord 1.19.3", "https://www.spigotmc.org/threads/spigot-bungeecord-1-19-3.581396/", "07/12/2022", "md5"),
    new Veille("Téléchargement de Spigot", "https://getbukkit.org/download/spigot", "05/12/2023", "GetBukkit Staff"),
    new Veille("Hub Jira (Bug report) de SpigotMC", "https://hub.spigotmc.org/jira/secure/Dashboard.jspa", "28/11/2014 - aujourd'hui", "md5"),
    new Veille("Faux Positifs Windows Defender", "https://www.spigotmc.org/threads/windows-defender-false-positives.639507/", "10/03/2024", "md5"),
    new Veille("Apparition de la 1.20.5", "https://www.minecraft.net/en-us/article/minecraft-1-20-5-pre-release-1", "10/04/2024", "Java Team"),
    new Veille("Hub Nexus de SpigotMC", "https://hub.spigotmc.org/nexus/#browse", "27/02/2015 - aujourd'hui", "md5"),
    new Veille("wiki.vg - Wiki de l'API Mojang", "https://wiki.vg/Mojang_API", "17/06/2014 - aujourd'hui", "Thinkofdeath"),
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