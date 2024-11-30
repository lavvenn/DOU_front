function uppercase_first_letter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function send_post() {
    let date = new Date(document.querySelector("input[name=birthday]").value)
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let formattedDate = `${day}/${month}/${year}`

    let response = await fetch("http:127.0.0.1:8000/add_child", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: uppercase_first_letter(document.querySelector("input[name=name]").value),
            surname: uppercase_first_letter(document.querySelector("input[name=surname]").value),
            lastname: uppercase_first_letter(document.querySelector("input[name=lastname]").value),
            birthday: formattedDate,
            groupa: document.querySelector("input[name=groupa]").value
        })
    })
    console.log(response)
    document.querySelector(".child_form").reset()
}

const button = document.querySelector("#send_form")
button.addEventListener("click", send_post)