function darkMode(){
    var SetTheme = document.body;
    // Ambil dark mode
    SetTheme.classList.toggle("dark-mode")
    var theme;
    // Conditional Dark/Light mode
    if(SetTheme.classList.contains("dark-mode")){
        // Ganti Icon ke Matahari
        document.getElementById("toggle").src = "/sun.svg";
        console.log("Dark mode");
        theme = "DARK";
    }else{
        // Icon kembali ke default
        document.getElementById("toggle").src = "/moon.svg";
        console.log("Light mode");
        theme = "LIGHT";
    }
    // Simpan ke local storage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // Pastikan JSON telah di Konversi -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if(GetTheme === "DARK"){
        document.body.classList = "dark-mode";
    }else{
        document.body.classList = "";
    }
}, 5);