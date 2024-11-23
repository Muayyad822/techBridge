const req = new XMLHttpRequest()

req.open("GET", "https://catfact.ninja/fact")
req.send()
console.log(req.response);
req.responseType = "json"
req.onload = ()=> console.log(req.response.fact);