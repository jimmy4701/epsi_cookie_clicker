
let total_cookie = 0
let cookies_per_second = 0

const logo_cookie = document.getElementById('logo-cookie')
const total_cookie_container = document.getElementById('total-cookie')
const cookies_per_second_container = document.getElementById('cps-container')

const refresh = () => {
    total_cookie_container.innerText = "Total cookies : " + total_cookie
    cookies_per_second_container.innerText = "Cookies par seconde : " + cookies_per_second
}

const addCookie = (nbCookies) => {
    total_cookie += nbCookies
    refresh()
}

logo_cookie.addEventListener("click", () => addCookie(1))

setInterval(() => addCookie(cookies_per_second), 1000)



