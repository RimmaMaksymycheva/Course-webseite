//function changeLanguage(lang) {
    function changeLanguage(lang) {
        localStorage.setItem("selectedLanguage", lang); // Speichert die gewählte Sprache
        updateLanguage(lang); // Aktualisiert den Text auf der Seite
    }
    
    function updateLanguage(lang) {
        document.getElementById("title").textContent = data[lang]["title"];
        document.getElementById("1").textContent = data[lang]["1"];
        document.getElementById("2").textContent = data[lang]["2"];
        document.getElementById("3").textContent = data[lang]["3"];
        document.getElementById("4").textContent = data[lang]["4"];
        document.getElementById("5").textContent = data[lang]["5"];
        document.getElementById("6").textContent = data[lang]["6"];
        document.getElementById("Hi").textContent = data[lang]["Hi"];
        document.getElementById("7").textContent = data[lang]["7"];
        document.getElementById("Kontakt").textContent = data[lang]["Kontakt"];
        document.getElementById("name").textContent = data[lang]["name"];
        document.getElementById("surname").textContent = data[lang]["surname"];
        document.getElementById("email").textContent = data[lang]["email"];
        document.getElementById("tel").textContent = data[lang]["tel"];
        document.getElementById("topic").textContent = data[lang]["topic"];
        document.getElementById("message").textContent = data[lang]["message"];
    }
    window.onload = function() {
        let savedLanguage = localStorage.getItem("selectedLanguage");
        if (savedLanguage) {
            updateLanguage(savedLanguage); // Verwendet die gespeicherte Sprache
        } else {
            updateLanguage("defaultLanguage"); // Verwende die Standardsprache, wenn keine gespeichert ist
        }
    }
        