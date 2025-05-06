fetch("https://formspree.io/f/xpwddpjl", {
method: "POST",
body: datos, // un FormData que contiene los campos del formulario
headers: {
    'Accept': 'application/json'
}
})