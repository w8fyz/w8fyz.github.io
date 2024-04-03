class Project {

    constructor(name, path, tags, description, image = "default-project.jpg") {
        this.name = name;
        this.path = path;
        this.tags = tags;
        this.image = image;
        this.description = description;
    }

    asComponent() {

        let html_tags = "";

        this.tags.forEach((tag) => {
            if(html_tags.length === 0) {
                html_tags+='<span class="primary">'+tag+'</span>'
            } else {
                html_tags+='<span>'+tag+'</span>'
            }
        })

        return '<div class="project">' +
            '<img alt="'+this.path+'" src="assets/img/projects/'+this.image+'">' +
            '<h2>'+this.name+'</h2>' +
            '<div class="tags">' +
            html_tags
            + '</div>' +
            '<p>'+this.description+'</p>' +
            '<a href="projects/'+this.path+'">En savoir plus</a>' +
            '</div>'
    }


}

const projects = [
    new Project("Salut", "test.html",  ["Site Web", "Caca"], "Moi j'adore les super projets rempli de projets, surtout quand le projet s'appelle projet ! Et du coup voila le projet tu vois l'idée ;)"),
    new Project("Salut", "test.html",  ["Site Web", "Caca"], "Moi j'adore les super projets rempli de projets, surtout quand le projet s'appelle projet ! Et du coup voila le projet tu vois l'idée ;)"),
    new Project("Salut", "test.html",  ["Site Web", "Caca"], "Moi j'adore les super projets rempli de projets, surtout quand le projet s'appelle projet ! Et du coup voila le projet tu vois l'idée ;)"),
    new Project("Salut", "test.html",  ["Site Web", "Caca"], "Moi j'adore les super projets rempli de projets, surtout quand le projet s'appelle projet ! Et du coup voila le projet tu vois l'idée ;)"),
    new Project("Salut", "test.html",  ["Site Web", "Caca"], "Moi j'adore les super projets rempli de projets, surtout quand le projet s'appelle projet ! Et du coup voila le projet tu vois l'idée ;)"),
    new Project("Salut", "test.html",  ["Site Web", "Caca"], "Moi j'adore les super projets rempli de projets, surtout quand le projet s'appelle projet ! Et du coup voila le projet tu vois l'idée ;)"),

]


let container = document.getElementById("projects-container");

projects.forEach((project) => {
    container.insertAdjacentHTML('beforeend',
        project.asComponent())
})