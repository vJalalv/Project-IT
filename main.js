
  function setTheme(theme){
    if(theme=='light') {
      document.body.style.backgroundImage="url('oo.webp')";
      document.body.style.color = "#000";
      document.documentElement.style.setProperty('--text-color', '#000');
      document.documentElement.style.setProperty('--navbar-bg', '#fff');
    }
    else if(theme=='dark'){
      document.body.style.backgroundImage="url('ll.jpg')";
      document.body.style.color ="#fff";
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--navbar-bg', '#000');
    }
  }
  window.onload = function() {
    setTheme('dark');
  }
  