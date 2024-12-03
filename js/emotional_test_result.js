async function get_api_adress(){
    let response = await fetch("../js/settings.json")
    let content = await response.json()
    return content.api_adress
}



async function get() {

    let api_adress = await get_api_adress()

    let response = await fetch(api_adress + "/tests/emotions")
    let content = await response.json()
    
    let list = document.querySelector(".emotional_test")

    let key;
    for(key in content){
        list.innerHTML += `<li>
        <h1> ${content[key].id}</h1>
        <h2>результат :${content[key].result} </h2>
        <p> id ребёнка ${content[key].child} </p>
        <p>добвален ${content[key].added_at.slice(0,-8)}</p>
        </li>`
    
}}

get()