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




function setAbstracts() {
    abstracts = document.getElementsByClassName("paper-abstract-short");
    for (let i = 0; i < abstracts.length; i++) {
        let abstract = abstracts.item(i);
        let abstractDone = abstract.parentElement.getElementsByClassName("paper-abstract-seemore").length;
        if (isOverflown(abstract) && !abstractDone) {
            //create a see less token
            const newdiv = document.createElement("div");
            newdiv.innerHTML = "...See More<i class=\"arrow down\"></i>";
            newdiv.className = "paper-abstract-seemore"
            newdiv.setAttribute("onClick", "seeMoreAbstract(this.parentElement.getElementsByClassName('paper-abstract-short')[0])");
            abstract.parentElement.appendChild(newdiv);
        }
    }

}




function seeLessAbstract(element) {
    const abstract = element.parentElement.getElementsByClassName("paper-abstract").item(0);
    abstract.classList.remove("paper-abstract");
    abstract.classList.add("paper-abstract-short");
    const newdiv = document.createElement("div");
    newdiv.innerHTML = "...See More<i class=\"arrow down\"></i>";
    newdiv.className = "paper-abstract-seemore"
    newdiv.setAttribute("onClick", "seeMoreAbstract(this.parentElement.getElementsByClassName('paper-abstract-short')[0])");
    abstract.parentElement.appendChild(newdiv);
    element.parentNode.removeChild(element);
}

document.addEventListener('DOMContentLoaded', function() {
    setAbstracts()
    console.log("setting see-more's")
});


function handleImageNotFoundError(image) {
    image.src = 'assets/images/generic_person_image.jpg';
}