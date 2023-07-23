console.log('starting')
var log_in = true;
function login ()  {
    document.getElementById('login').style.opacity = 1;
    document.getElementById('signup').style.opacity = 0.5;
    document.getElementById('login').style.fontSize = "x-large";
    document.getElementById('signup').style.fontSize = "initial";
    // document.getElementById('fname').style.translate = "0 -400px";
    document.getElementById('fname').style.visibility = "hidden";
    document.getElementById('fname').style.color = "#191d2b";
    document.getElementById('fnamei').required = false;
    document.getElementById('fnamei').style.border = "none";
    document.querySelector(':root').style.setProperty("--ph-c", "#191d2b");
    document.getElementById('submit').style.translate = "0 -20px";
    // var select = document.getElementById('fname');
    // if (select != null)  {
    //     select.parentNode.removeChild(select);
    // }
    log_in = true;
return
}

function signup ()  {
    document.getElementById('login').style.opacity = 0.5;
    document.getElementById('signup').style.opacity = 1;
    document.getElementById('login').style.fontSize = "initial";
    document.getElementById('signup').style.fontSize = "x-large";
    // document.getElementById('fname').style.translate = "0 0";
    document.getElementById('fname').style.visibility = "visible";
    document.getElementById('fname').style.color = "#fff";
    document.getElementById('fnamei').required = true;
    document.getElementById('fnamei').style.borderBottom = "2px solid #fff";
    document.querySelector(':root').style.setProperty("--ph-c", "#fff");
    document.getElementById('submit').style.translate = "0 0";
    // document.getElementById('submit').style.translate = "0 20px";
    // var select = document.getElementById('fname');
    // if (select == null)  {
    //     document.getElementById('inps').innerHTML += 
    //       '<label for="fname" id="fname"><i class="fa fa-user fa-lg" aria-hidden="true"></i><input id="fname" type="fname" required placeholder="Full Name" /></label>';
    // }
    log_in = false;
    return
}