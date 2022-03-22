function darkMode(){
    var SetTheme = document.body;
    // Ambil dark mode
    SetTheme.classList.toggle("dark-mode")
    var theme;
    let icon;
    // Conditional Dark/Light mode
    if(SetTheme.classList.contains("dark-mode")){
        console.log("Dark mode");
        theme = "DARK";
        // Ganti Icon ke Matahari
        icon = "SUN";
    }else{
        console.log("Light mode");
        theme = "LIGHT";
        // Icon kembali ke default (Moon)
        icon = "MOON";
    }

    // Simpan ke local storage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    localStorage.setItem("IconTheme", JSON.stringify(icon));
    // Pastikan di konversi ke String -----JSON.stringify(theme)
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

setInterval(() => {
    let GetIcon = JSON.parse(localStorage.getItem("IconTheme"));
    console.log(GetIcon);
    if(GetIcon === "SUN"){
        document.getElementById("toggle").src = "/sun.svg";
    }else{
        document.getElementById("toggle").src = "/moon.svg";
    }
}, 5);