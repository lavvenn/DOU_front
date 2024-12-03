async function get_api_adress(){
    let response = await fetch("../js/settings.json")
    let content = await response.json()
    return content.api_adress
}


async function send_post() {

    let api_adress = await get_api_adress()

    let response = await fetch(api_adress + "/tests/raven/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            child_id: Number(document.querySelector("input[name=child_id]").value),

            a_1: Number(document.querySelector("input[name=A_1]").value),
            a_2: Number(document.querySelector("input[name=A_2]").value),
            a_3: Number(document.querySelector("input[name=A_3]").value),
            a_4: Number(document.querySelector("input[name=A_4]").value),
            a_5: Number(document.querySelector("input[name=A_5]").value),
            a_6: Number(document.querySelector("input[name=A_6]").value),
            a_7: Number(document.querySelector("input[name=A_7]").value),
            a_8: Number(document.querySelector("input[name=A_8]").value),
            a_9: Number(document.querySelector("input[name=A_9]").value),
            a_10: Number(document.querySelector("input[name=A_10]").value),
            a_11: Number(document.querySelector("input[name=A_11]").value),
            a_12: Number(document.querySelector("input[name=A_12]").value),

            ab_1: Number(document.querySelector("input[name=AB_1]").value),
            ab_2: Number(document.querySelector("input[name=AB_2]").value),
            ab_3: Number(document.querySelector("input[name=AB_3]").value),
            ab_4: Number(document.querySelector("input[name=AB_4]").value),
            ab_5: Number(document.querySelector("input[name=AB_5]").value),
            ab_6: Number(document.querySelector("input[name=AB_6]").value),
            ab_7: Number(document.querySelector("input[name=AB_7]").value),
            ab_8: Number(document.querySelector("input[name=AB_8]").value),
            ab_9: Number(document.querySelector("input[name=AB_9]").value),
            ab_10: Number(document.querySelector("input[name=AB_10]").value),
            ab_11: Number(document.querySelector("input[name=AB_11]").value),
            ab_12: Number(document.querySelector("input[name=AB_12]").value),

            b_1: Number(document.querySelector("input[name=B_1]").value),
            b_2: Number(document.querySelector("input[name=B_2]").value),
            b_3: Number(document.querySelector("input[name=B_3]").value),
            b_4: Number(document.querySelector("input[name=B_4]").value),
            b_5: Number(document.querySelector("input[name=B_5]").value), 
            b_6: Number(document.querySelector("input[name=B_6]").value),
            b_7: Number(document.querySelector("input[name=B_7]").value),
            b_8: Number(document.querySelector("input[name=B_8]").value),
            b_9: Number(document.querySelector("input[name=B_9]").value),
            b_10: Number(document.querySelector("input[name=B_10]").value),
            b_11: Number(document.querySelector("input[name=B_11]").value),
            b_12: Number(document.querySelector("input[name=B_12]").value),
        })
    })
}

const button = document.querySelector("#send_form")
button.addEventListener("click", send_post)