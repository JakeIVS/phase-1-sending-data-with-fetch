// Add your code here
function submitData(name, email) {
    const userData = {
        'name': name,
        'email': email
    }
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(userData),
    })
    .then((r)=>r.json())
    .then((data)=> {
        const p = document.createElement('p')
        const body = document.querySelector('body')
        p.innerHTML = data.id;
        body.appendChild(p);
    })
    .catch((error)=>{
            const p = document.createElement('p')
            const body = document.querySelector('body')
            p.innerHTML = error.message;
            body.appendChild(p);
    });
}
