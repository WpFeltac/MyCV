var linkContainers = document.getElementsByClassName("linkContainer");

for(let linkContainer of linkContainers){
    let baseColor = linkContainer.style.backgroundColor;

    linkContainer.addEventListener("mouseenter", function(){DarkenColor(linkContainer)}, false);
    linkContainer.addEventListener("mouseleave", function(){ResetColor(linkContainer, baseColor)}, false);
    linkContainer.addEventListener("click", function(){Redirect(linkContainer)}, false);
}

function DarkenColor(object){
    object.style.backgroundColor = "#4e4444";
}

function ResetColor(object, baseColor){
    object.style.backgroundColor = baseColor;
}

function Redirect(object){
    switch(object.id){
        case "LinkedIn":
            window.location.href = "https://www.linkedin.com/in/hugo-berleur-76667b1a7/";
            break;
        case "Git":
            window.location.href = "https://github.com/WpFeltac";
            break;
        case "Gmail":
            window.location.href = "mailto:hberleur@gmail.com";
            break;
    }  
}