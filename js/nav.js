const options = document.querySelector(".options");
const dropList = document.querySelector(".usage");
//const list = document.querySelectorAll(".list-actions ul li");
const body = document.querySelector("body");
const refresh = document.querySelector(".refresh");
const url = document.querySelector(".url");
const issue = document.querySelector(".issue");
const x = document.getElementById("field");
const listActions = document.getElementById("list");

function change(e) {
    dropList.classList.toggle("none");
    options.classList.toggle("click");
}

refresh.addEventListener("click",(e) => {
    e.preventDefault();
    refresh.innerText = 'Refreshing...';
    setTimeout(function(){
        window.location.reload(true);
    },1500)
    url.classList.remove("active-selection");
    refresh.classList.add("active-selection");
    issue.classList.remove("active-selection");
})

url.addEventListener("click",(e) => {
    e.preventDefault();
    let domain = window.location.href;
    console.log(domain);
    url.classList.add("active-selection");
    refresh.classList.remove("active-selection");
    issue.classList.remove("active-selection");
    
    try {
        url.innerText = 'Copying...';
        setTimeout(function(){
            navigator.clipboard.writeText(domain);
            url.innerText = 'Copyied!';
            alert("Successfully copied "+ domain);
        },1500)
    } catch (error) {
        alert("There was an error while copying website url! This might occur if your browser doesn't supports Html5/JavaScript!");
        console.error(error);
    }
    setTimeout(function(){
        url.innerText = 'Copy URL';
    },3500)
})

issue.addEventListener("click",(e) => {
    e.preventDefault();
    url.classList.remove("active-selection");
    refresh.classList.remove("active-selection");
    issue.classList.add("active-selection");

    issue.innerText = 'Please wait...'
    setTimeout(function(){
        window.location.href = "https://github.com/blazeinferno64/blaze-file-downloader/issues/new"
    },1500)
})

issue.addEventListener("dblclick",(e) => {
    e.preventDefault();
})