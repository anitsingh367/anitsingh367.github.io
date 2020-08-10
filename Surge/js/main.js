
let mainNav = document.getElementById("main-nav");
let menubtn = document.getElementById("menu-btn");


// document.getElementById("menu-btn").onclick = function () {

//     mainNav.classList.toggle('active');
// };
menubtn.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

function displayQuote(profileID) {
    hideQuote();
    document.getElementById(profileID).querySelector("img").style.filter = "grayscale(0%)";
    document.getElementById("college-name-1").querySelector("#" + profileID + "-college")
        .style.display = "block";

    document.getElementById("quotes-1").querySelector("#" + profileID + "-quote").style.display =
        "block";
    document.getElementById("student-name-1").querySelector("#" + profileID + "-name").style
        .display = "block";

}

function hideQuote() {
    document.getElementById("profile-list").querySelectorAll("img").forEach(itemName =>{
        if(itemName.style.filter = "grayscale(0%)"){
            itemName.style.filter = "grayscale(100%)"
        }
    })
    document.getElementById("college-name-1").querySelectorAll("h2").forEach(itemName1 => {
        if(itemName1.style.display = "block"){
            itemName1.style.display = "none";
        }
    });
    document.getElementById("quotes-1").querySelectorAll("p").forEach(itemName2 => {
        if(itemName2.style.display = "block"){
            itemName2.style.display = "none";
        }
    });
    document.getElementById("student-name-1").querySelectorAll("p").forEach(itemName3 => {
        if(itemName3.style.display = "block"){
            itemName3.style.display = "none";
        }
    });
}


