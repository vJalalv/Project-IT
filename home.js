
  function setTheme(theme){
    if(theme=='light') {
      document.body.style.backgroundImage="url('oo.webp')";
      document.body.style.color = "#000";
      document.documentElement.style.setProperty('--text-color', '#000');
      document.documentElement.style.setProperty('--navbar-bg', '#fff');
      document.body.style.transition = "background 0.5s ease, color 0.3s ease";
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
  
