window.onload = function(){
    const box = document.querySelector(".box");
    const boxStyles = getComputedStyle(box);
    //console.log(boxStyles);
    const boxBorderColor = boxStyles.getPropertyValue("--box-border-color");
    //console.log(boxBorderColor);

    const header = document.querySelector("#nav-title");
    header.style.setProperty("--header-bg-color" , "green");
}