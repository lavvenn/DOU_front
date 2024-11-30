

async function get(){
    let response = await fetch("http:127.0.0.1:8000")
    let content = await response.json()
    console.log(content)

    let list = document.querySelector(".child")

    let key;
    for(key in content){
        list.innerHTML += `<li>
        <h1> ${content[key].name} ${content[key].surname} ${content[key].lastname} группа "${content[key].groupa}" </h1>
        <p> ${content[key].birthday.slice(0,-8)} </p>
        </li>`
}
}

get()