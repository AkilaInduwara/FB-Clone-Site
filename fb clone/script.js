//when you are trying to retrieve an id then you should use getElementById.
// If you are trying to retrieve a class or tag then you should use querySelector.

// classlist -- returns the CSS classnames (when we want to select a class that created in only CSS file and not used in HTML, use ClassList )
// toggle -- on and off the function when click


var settingmenu = document.querySelector(".settings-menu");  /* create variable for "settings-menu" selector, for ease of use. otherwise,
have to use this-- document.querySelector(".settings-menu").classList.toggle(".settings-menu-height"); */


function settingMenuToggle(){
    

    settingmenu.classList.toggle("settings-menu-height"); 

        //settingmenu -- select the ".settings-menu" class. Bydefault with css propertiese drop down-menu currently hidden.
        // classList -- select the class that created in css file for unhide the drop-down menu.
        // toggle -- toggle (on & off) the ".settings-menu-height" class.

}



var darkbtn = document.getElementById("dark-btn"); //store the dark-btn element in a variable.

darkbtn.onclick = function(){ 

    darkbtn.classList.toggle("dark-btn-on"); 
    document.body.classList.toggle("dark-theme"); // "document.body ---- select the body element in whole web site"

            /* white button store as a variable called "darkbtn" and, called a function to run when click the white button.
Inside the function, "darkbtn" called again and command it to change the id to the class name called "dark-btn-on"
that created in the CSS File when click the white button(id="dark-btn"). */



//-----------------when click the toogle button create a localstorage------------------------------------

    if(localStorage.getItem("theme") == "light"){

        localStorage.setItem("theme","dark"); //when click the button, if localstorage value is "light" it will set into "dark"

    }
    else{

        localStorage.setItem("theme","light"); //if localstorage value is "dark" it will set into "light".

    } //note: by default localstorage value already set into the light in below.

}       


//  localStorage.setItem("theme","light/dark"); ----- creating localStorage with the name of "theme" and its value is "light/dark".
//  localStorage.getItem("theme"); ---- give the value of a localStorage called "theme".


//when you visited to the site, it create a localstorage.

//then you trying to visit again the site and it checks the localstorage and define what mode you on last time.

if(localStorage.getItem("theme") == "light"){ //__check localStorage value == light

    darkbtn.classList.remove("dark-btn-on"); //--- if yes, turn off the dark button --> remove "dark-btn-on" class
    document.body.classList.remove("dark-theme");//-- turn off/remove the "dark-theme" class. keep stay on light mode.

}
else if(localStorage.getItem("theme") == "dark"){ //__check localStorage value == dark

    darkbtn.classList.add("dark-btn-on");  //--- if yes, turn on the dark button --> add "dark-btn-on" class
    document.body.classList.add("dark-theme");//-- //-- turn on/add the "dark-theme" class. keep stay on dark mode.

}
else{

    localStorage.setItem("theme","light"); //--- if you visit first time, a localstorage created with light mode by default.

}

//all codes above that explain local storage run only when you open the web site. do not need the toogle button.
//--- but we have to add some changes when people click the toogle button and when they click it localstorage must be updated . (this code is in inside the darkbtn function)
