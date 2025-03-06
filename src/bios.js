// CONSTS TO KEEP TRACK
const imgNames = ["pikachu", "charmander", "squirtle"];
let selected = null;
let bioImgs = [];

// CHANGING ELEMENTS
const selector = document.querySelector("#selector"); // ADDING ELEMENTS TO THIS

const selectedName = document.getElementById("selectedName");
const selectedBio = document.getElementById("selectedBio");


// GENERATE THE ELEMENTS
imgNames.forEach( name => {

    // ADDING TO AN ARRAY TO CONTROL WHICH IMG ELEMENT IS ACTIVE
    bioImgs.push(document.querySelector(`#${name}Img`));

    // CREATE THE BUTTON
    let newButton = document.createElement("button");
    newButton.innerText = name;
    newButton.setAttribute("class", "fs-4 py-3 px-4 outline-1 w-50 h-50");

    // ADD EVENT LISTENER
    newButton.addEventListener('click', (e) => {

        // CONDITIONAL TO SWAP OUT THE IMAGES
        bioImgs.forEach( img => {

            // IF THE RIGHT IMAGE IS CHOSEN
            if (img.getAttribute('id') == `${name}Img`) {

                img.classList.remove("d-none");
            }
            // IF THE WRONG IMAGE IS FOUND
            else {

                img.classList.add("d-none");
            }
        })

        // CHANGING THE PHOENETIC PORTIONS
        selectedName.innerText = name;
        selectedBio.innerText = name + " is now the current bio shown.";
    })


    // ADD TO THE DIV
    selector.appendChild(newButton);
});