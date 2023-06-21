const forms =  document.getElementById("forms");
const downloadBtn =  document.querySelector(".btn");
const log =  document.getElementById("status");
const field = document.getElementById("field");
const link = document.getElementById("link");
const underlineEffect = document.querySelector(".underline");

forms.addEventListener("submit",(e) =>{
    e.preventDefault();
    console.log(e.target.value);
})

log.style.color = '#fff';
log.style.borderColor = '#ccc';

field.addEventListener("input",(e) =>{
    if (field.value === ''|field.value==null){
        downloadBtn.style.opacity = '.75';
        downloadBtn.style.pointerEvents = 'none';
    }
    // Uncommenting the code below might cause an error in the fetch Api
    /*if (field.value.length <= 0){
        downloadBtn.style.opacity = '.75';
        downloadBtn.style.pointerEvents = 'none';
    }
    if (field.value.length > 0){
        downloadBtn.style.opacity = '1';
        downloadBtn.style.pointerEvents = 'auto';
    }*/
})

document.addEventListener('contextmenu',(e) =>{
    e.preventDefault();
    console.error("Viewing source code directly here is not allowed!");
})

//Lets start with the fetch Api part now 

downloadBtn.addEventListener("click",(e)=>{
    fetchFile(field.value);
});



function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        console.log(tempUrl);
        downloadBtn.innerHTML = '<i class="fa fa-download"></i> '+'Downloading...';
        log.style.color = 'rgb(1, 182, 113)';
        log.style.borderColor = 'rgb(1, 182, 113)';
        log.innerText = 'Downloading the file...';
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
        setTimeout(function(){
            downloadBtn.innerHTML = '<i class="fa fa-download"></i> '+'Download';
            log.innerText = 'File Successfully Downloaded!';
            log.style.color = "#fff";
            field.value = '';
            log.innerText = 'Enter an URL first';
        },3000)
    }).catch(() => {
        console.error("Sorry but there was an error!");
        log.innerText = 'An error occured!';
        log.style.color = '#d1245e';
        log.style.borderColor = '#d1245e';
        console.log("Error Code : 00945000x1");
    })
}


link.addEventListener("mouseover",(e) =>{
    underlineEffect.style.width = '100%';
});

link.addEventListener("mouseout",(e) => {
    underlineEffect.style.width = '0';
})
