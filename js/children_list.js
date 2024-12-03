async function get_api_adress(){
    let response = await fetch("../js/settings.json")
    let content = await response.json()
    return content.api_adress
}


async function get(){

    let api_adress = await get_api_adress()


    let response = await fetch(api_adress + "/children")
    let content = await response.json()
    console.log(content)

    let list = document.querySelector(".child")

    let key;
    for(key in content){
        list.innerHTML += `<li>
        <h1> ${content[key].name} ${content[key].surname} ${content[key].lastname} группа "${content[key].groupa}" </h1>
        <p> ${content[key].birthday.slice(0,-8)} </p>
        <p> id ${content[key].id} </p>
        </li>`
}
}

get()