class Project {

    constructor(name, path, tags, description, image = "default-project.jpg") {
        this.name = name;
        this.path = path;
        this.tags = tags;
        this.image = image;
        this.description = description;
    }

    asComponent() {


        return '<div class="project">' +
            '<img alt="'+this.path+'" src="assets/img/projects/'+this.image+'">' +
            '<h2>'+this.name+'</h2>' +
            '<div class="tags">' +
            getCleanTags(this.tags)
            + '</div>' +
            '<p>'+this.description+'</p>' +
            '<a href="projects/'+this.path+'">En savoir plus</a>' +
            '</div>'
    }


}

function getCleanTags(tag_list) {
    let html_tags = "";

    tag_list.forEach((tag) => {
        if(html_tags.length === 0) {
            html_tags+='<span class="primary">'+tag+'</span>'
        } else {
            html_tags+='<span>'+tag+'</span>'
        }
    });
    return html_tags;
}

const projects = [
    new Project("Mon portfolio", "portfolio.html",  ["Site Web", "HTML", "CSS", "JS"], "Un portfolio réalisé dans le cadre de ma formation en BTS SIO SLAM, permettant de centraliser mes projets et mes recherches."),
    new Project("Beepot", "beepot.html", ["Site Web", "HTML", "CSS", "JS", "PHP"], "Un réseau social développé à l'origine comme projet de fin de première année de BTS SIO SLAM, qui a fini par devenir un de mes projets principaux pendant quelques mois.", "beepot.jpg"),
    new Project("Blog en PHP", "php_blog.html", ["Site Web", "HTML", "CSS", "PHP"], "Lors de ma première année de cours de BTS, nous avons été confronté à un projet aléatoire avec 3h pour le réalisé, c'est à ce moment là que j'ai créer ce système de blog simpliste."),
    new Project("SDK Java de l'API Ship24", "wrapper_ship4j.html", ["SDK", "Java", "Postman"], "J'ai pendant quelques jours travaillé sur la création d'un wrapper pour l'API de Ship24. L'objectif était de pouvoir utiliser facilement leur API dans un programme Java.")
]

function getProjectByPath(path) {

}

function updateSelfFromProject(project) {
    document.title = project.name;
    document.getElementById("meta-project-tags").innerHTML = getCleanTags(project.tags)

}

let container = document.getElementById("projects-container");

if(container != null) {

projects.forEach((project) => {
    container.insertAdjacentHTML('beforeend',
        project.asComponent())
});
}

let self_project = getProjectByPath(window.location.pathname.split("/").pop());

if(self_project != null) {
    updateSelfFromProject(self_project);
}