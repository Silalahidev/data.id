// Fungsi untuk membalikkan tampilan kartu (flip)
function flip() {
    document.querySelector('.flip-card-inner').style.transform = "rotateY(180deg)";
}

function flipAgain() {
    document.querySelector('.flip-card-inner').style.transform = "rotateY(0deg)";
}

// Fungsi untuk toggle visibilitas password pada form login
let eyeLogin = document.getElementById("eye-login");
let passwordLogin = document.getElementById("login-password");

if (eyeLogin && passwordLogin) {
    eyeLogin.addEventListener("click", function () {
        if (passwordLogin.type === "password") {
            passwordLogin.type = "text";  // Menampilkan password
            eyeLogin.className = "fa fa-eye";  // Ikon mata terbuka
            eyeLogin.style.color = "cyan";  // Ganti warna ikon
        } else {
            passwordLogin.type = "password";  // Menyembunyikan password
            eyeLogin.className = "fa fa-eye-slash";  // Ikon mata tertutup
            eyeLogin.style.color = "white";  // Ganti warna ikon kembali ke putih
        }
    });
}

// Fungsi untuk toggle visibilitas password pada form signup
let eyeSignup = document.getElementById("eye-signup");
let passwordSignup = document.getElementById("signup-password");

if (eyeSignup && passwordSignup) {
    eyeSignup.addEventListener("click", function () {
        if (passwordSignup.type === "password") {
            passwordSignup.type = "text";  // Menampilkan password
            eyeSignup.className = "fa fa-eye";  // Ikon mata terbuka
            eyeSignup.style.color = "cyan";  // Ganti warna ikon
        } else {
            passwordSignup.type = "password"; 
            eyeSignup.className = "fa fa-eye-slash";  
            eyeSignup.style.color = "white";  
        }
    });
}

