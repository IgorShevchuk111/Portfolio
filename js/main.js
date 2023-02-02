const btnDarkMode = document.querySelector(".dark-mode-btn");


// checking the dark scheme of the computer settingss

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    document.body.classList.add("dark");
}


// checking localStorage dark Mode

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");

} else  if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}


// in case of changing computer settings (sheme)

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const nawColorScheme = event.matches ? "dark" : "light";

    if (nawColorScheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode','dark');
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode','light');
    }

})


// Turn on dark mode by button

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode','dark');
    } else {
        localStorage.setItem('darkMode','light');
    }
}


