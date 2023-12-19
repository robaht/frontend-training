function enable(){
    console.log("button recognized");
    //get Values
    let sidebar = document.getElementById("sidebar");
    let sidebarstyle = window.getComputedStyle(sidebar);
    let left = sidebarstyle.getPropertyValue("left");
    
    if(left === "-250px"){
        sidebar.style.left = "0px";
    }else{                              //-250px = eingeklappt 0px = ausgeklappt
        sidebar.style.left = "-250px";
    }
    
}