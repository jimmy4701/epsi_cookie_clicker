
let total_cookie = 0 

const logo_cookie = document.getElementById('logo-cookie')
const total_cookie_container = document.getElementById('total-cookie')

const addCookie = () => {
    total_cookie++
    total_cookie_container.innerText = "Total cookies : " + total_cookie
}

logo_cookie.addEventListener("click", addCookie)


