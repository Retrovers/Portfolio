var css = document.getElementById('css')
var currentCss = css.getAttribute('href')
var defaultCss = "css/" + currentCss.replace('css/', '')
var nightCss = "css/night/" + currentCss.replace('css/', '')
var cookiesEnable = false;

function changeCss (){
    if (currentCss.indexOf('night') > -1 ) {
        currentCss = defaultCss
        css.setAttribute('href', currentCss)
        setCookie('nightMode', 0)
    } else {
        currentCss = nightCss
        css.setAttribute('href', currentCss)
        setCookie('nightMode', 1)
    }
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

document.getElementById('night').addEventListener('click', function(e){
    if (cookiesEnable) {
        changeCss()
    } else {
        if (confirm('Cette fonctionnalité utilise les cookies, en cliquant sur "ok" vous acceptez l\'ecriture des cookies sur votre systeme (voir site de la cnil)')){
            changeCss()
            cookiesEnable = 1;
            setCookie('cookiesEnable', 1)
        }
    }
})

if(getCookie('cookiesEnable') ==  1){ 
    cookiesEnable = true 
    if (getCookie('nightMode') == 1) {
        changeCss()
    }
}

