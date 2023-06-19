const btn = document.querySelector('button');
const btnForm = document.querySelector('#forms');

console.log(btn)


btnForm.addEventListener('click', async () => {
    // handle the form data
    // form.preventDefault()
    const form = document.forms[0];
    const body = Object.fromEntries(new FormData(form).entries()
    )
    console.log('submit', body)

    let response = await fetch('/json/save', { 
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const res = await response.json();
    console.log(res)
    
    // const formDiv = document.querySelector('#formDiv');
    // // formDiv.innerHTML = '';
    // // formDiv.innerHTML += `<p> ${body.value} </p>`

    // for (let [key, value] of Object.entries(res)) {
    //     console.log('name', key, 'surname', value)
    //     formDiv.innerHTML += `<p>${key}, ${value}</p>`
    // }

});

