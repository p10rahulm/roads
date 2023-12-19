function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}


function seeMoreAbstract(element) {
    if (element.classList.contains("paper-abstract-short") && isOverflown(element)) {
        element.classList.remove("paper-abstract-short");
        element.classList.add("paper-abstract");


        //create a see less token
        const newdiv = document.createElement("div");
        newdiv.innerHTML = "...See Less<i class=\"arrow up\"></i>";
        newdiv.className = "paper-abstract-seeless";
        newdiv.setAttribute("onClick", "seeLessAbstract(this)");
        // newdiv.onclick = "seeLessAbstract(newdiv)";
        element.parentElement.appendChild(newdiv);

        seemore = element.parentElement.getElementsByClassName("paper-abstract-seemore")[0];
        seemore.parentElement.removeChild(seemore);


    }
}


