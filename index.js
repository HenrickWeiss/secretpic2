
  function prüfen(){
    const eingabe = document.getElementById("password").value;
    const korrektesPasswort = "123";

    if(eingabe === korrektesPasswort){
      document.getElementById("bild").style.display="block"
      document.getElementById("fehler").style.display="none"
    }else{
      document.getElementById("bild").style.display="none"
      document.getElementById("fehler").style.display="block"
      alert("Erneut versuchen")
    }
  }

document.getElementById("close").addEventListener("click", 
  function(){
    window.close()
  })

