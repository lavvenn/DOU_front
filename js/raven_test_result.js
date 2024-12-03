async function get_api_adress(){
    let response = await fetch("../js/settings.json")
    let content = await response.json()
    return content.api_adress
}



async function get() {

    let api_adress = await get_api_adress()

    let response = await fetch(api_adress + "/tests/raven")
    let content = await response.json()
    
    let list = document.querySelector(".raven_test")

    let key;
    for(key in content){
        list.innerHTML += `<li>
        <h1> ${content[key].id}</h1>
        <h2>результат A :${content[key].result_a} </h2>
        <h2>результат AB :${content[key].result_ab} </h2>
        <h2>результат B :${content[key].result_b} </h2>
        <p> id ребёнка ${content[key].child} </p>
        <p>добвален ${content[key].added_at.slice(0,-8)}</p>
        </li>`
    
}}

get()