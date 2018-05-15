
const addElemListener = (elem) => {
    elem.addEventListener('click', (e) => {
        var id = elem.dataset.id;
        var cont = document.getElementById('details');
        // cont.innerText = id;
        fetch('https://isa-simple-rest-api.herokuapp.com/api/users/' + id)
            .then(response => response.json())
            .then((data) => {
                cont.innerHTML = '<h2>' + data.id +  ' # ' + data.username + '</h2>';
            });
    }, false);
}

const getUsers = ()=>{
    return fetch('https://isa-simple-rest-api.herokuapp.com/api/users')
        .then(response => response.json())
        .then((data) => {
            console.log(typeof data);
            var authors = document.getElementById('user');
            for(var value of data) {
                console.log(value.id + ' - ' + value.username);
                var user = document.createElement('li');
                user = document.createElement("BUTTON");
                user.innerText = value.id + ' - ' + value.username;
                user.dataset.id = value.id;
                authors.appendChild(user);
                addElemListener(user);
            }
        });
}


getUsers();

