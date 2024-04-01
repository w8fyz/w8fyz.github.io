let MAX = 5;

let nb = 0;
let interval;

function rollFonts(){
    document.querySelectorAll(".font-rolling").forEach((element) => {
        rollFontsSpecificElement(element);
    });
    if(nb === MAX) {
        nb = 0;
        clearInterval(interval);
    }
    nb++;
}

function rollFontsSpecificElement(element) {
    element.classList.remove("font-"+nb);
    if((nb+1) <= MAX) element.classList.add("font-"+(nb+1));

}

interval = setInterval(rollFonts, 130);

