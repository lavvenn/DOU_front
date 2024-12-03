async function get_api_adress(){
    let response = await fetch("../js/settings.json")
    let content = await response.json()
    return content.api_adress
}


async function send_post() {

    let api_adress = await get_api_adress()

    let response = await fetch(api_adress + "/tests/emotions/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            child_id:document.querySelector("input[name=child_id]").value,
            e_1: document.querySelector("input[name=e_1]").value,
            e_2: document.querySelector("input[name=e_2]").value,
            e_3: document.querySelector("input[name=e_3]").value,
            e_4: document.querySelector("input[name=e_4]").value,
            e_5: document.querySelector("input[name=e_5]").value,
            e_6: document.querySelector("input[name=e_6]").value,
}
        )
    })
    console.log(response)
}
const button = document.querySelector("#send_form")
button.addEventListener("click", send_post)
