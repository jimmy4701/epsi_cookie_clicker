
let total_cookie = 0
let cookies_per_second = 0

const logo_cookie = document.getElementById('logo-cookie')
const total_cookie_container = document.getElementById('total-cookie')

const addCookie = (nbCookies) => {
    total_cookie += nbCookies
    total_cookie_container.innerText = "Total cookies : " + total_cookie
}

logo_cookie.addEventListener("click", () => addCookie(1))

setInterval(() => addCookie(cookies_per_second), 1000)



