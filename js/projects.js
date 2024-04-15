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
    new Project("SDK Java de l'API Ship24", "wrapper_ship4j.html", ["SDK", "Java", "Postman"], "J'ai pendant quelques jours travaillé sur la création d'un wrapper pour l'API de Ship24. L'objectif était de pouvoir utiliser facilement leur API dans un programme Java."),
    new Project("Bot Discord pour BTS", "bot_bts.html", ["Bot", "Java", "Discord"], "Pour permettre à ma classe un lieu pour échanger, j'ai développé un bot ainsi qu'un serveur discord permettant d'échanger différentes informations.", "bts_bot.jpg"),
    new Project("Portfolio utilisant Bootstrap et Handlebars", "portfolio_bootstrap_handlebars.html", ["Site Web", "HTML", "Bootstrap", "Handlebars"], "En cours de développement lors de ma première année, il nous a été demandé de réaliser un portfolio avec Bootstrap."),
    new Project("Logiciel de gestion de couleurs DMX", "gestion_dmx.html", ["Java", "JavaFX"], "En stage dans un studio, nous avons mis en place un système de lumières en DMX, j'ai alors créé un logiciel permettant de choisir la couleur."),
    new Project("Site Web de gestion d'images", "gestion_images.html", ["Site Web", "HTML", "CSS", "PHP"], "Projet abandonné car jamais utilisé, il permettait de lier des images à des comptes de productions permettant une organisation optimum."),
    new Project("OkCongés", "okconges.html", ["Site Web", "HTML", "CSS", "PHP"], "Un projet encore utilisé aujourd'hui permettant de notifier des absences et congés et de les faire valider directement en ligne.", "okconges.jpg"),
    new Project("Site Web d'une filiale de OpenMediaFactory", "filiale_omf.html", ["Site Web","Wordpress"], "Un site web réalisé sur wordpress pour une filiale journalistique de OpenMediaFactory."),
    new Project("Site Web de TéléParis", "teleparis.html", ["Site Web","Wordpress"], "Le site web de mon entreprise en alternance. Un projet de site Wordpress avec un thème customisé adapté aux besoins de l'entreprise.", "teleparis.jpg"),
    new Project("Site Web de OpenMediaFactory", "openmediafactory.html", ["Site Web","Wordpress"], "Le site web de la maison-mère de l'entreprise de mon alternance, qui devais mettre en avant les différents services de studios.", "openmediafactory.jpg"),

]

function getProjectByPath(path) {
    projects.forEach((project) => {
        if(project.path === path) {
            return project;
        }
    })
    return null;
}

function updateSelfFromProject(project) {
    document.title = project.name;
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