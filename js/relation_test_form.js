async function get_api_adress(){
    let response = await fetch("../js/settings.json")
    let content = await response.json()
    return content.api_adress
}


async function send_post() {

    let api_adress = await get_api_adress()

    let response = await fetch(api_adress + "/tests/relation/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            child_id:document.querySelector("input[name=child_id]").value,
            r_1: Number(document.querySelector("input[name=r_1]").value),
            r_2: Number(document.querySelector("input[name=r_2]").value),
            r_3: Number(document.querySelector("input[name=r_3]").value),
            r_4: Number(document.querySelector("input[name=r_4]").value),
            r_5: Number(document.querySelector("input[name=r_5]").value),
            r_6: Number(document.querySelector("input[name=r_6]").value),
            r_7: Number(document.querySelector("input[name=r_7]").value),
            r_8: Number(document.querySelector("input[name=r_8]").value),
            r_9: Number(document.querySelector("input[name=r_9]").value),
            r_10: Number(document.querySelector("input[name=r_10]").value),
            r_11: Number(document.querySelector("input[name=r_11]").value),
            r_12: Number(document.querySelector("input[name=r_12]").value),
            r_13: Number(document.querySelector("input[name=r_13]").value),
            r_14: Number(document.querySelector("input[name=r_14]").value),
            r_15: Number(document.querySelector("input[name=r_15]").value),
            r_16: Number(document.querySelector("input[name=r_16]").value),
            r_17: Number(document.querySelector("input[name=r_17]").value),
            r_18: Number(document.querySelector("input[name=r_18]").value),
            r_19: Number(document.querySelector("input[name=r_19]").value),
    })
    })
    console.log(response)
}

function main() {
    table = document.querySelector(".relation_form")

    for (let i = 1; i <= 19; i++) {
        table.innerHTML += `<tr>
        <td>${i}</td>
        <td><input type="text" name="r_${i}" id="r_${i}"></td>
        </tr>`
    }
}

main()




const button = document.querySelector("#send_form")
button.addEventListener("click", send_post)