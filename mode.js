
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function setThemeMode(){
  let body = document.body;
  let x = getCookie("themeCookie");
  if(x == "dark"){
    body.classList.add("darkmode");
  }else{
    body.classList.remove("darkmode");
  };
};

const btn = document.querySelector("#checkbox");

btn.addEventListener("click", function() {
  document.body.classList.toggle("darkmode");
  let theme = "light";
  if (document.body.classList.contains("darkmode")) {
    theme = "dark";
  }
  // save cookie
  setCookie("themeCookie", theme, 1);
});

setThemeMode();
