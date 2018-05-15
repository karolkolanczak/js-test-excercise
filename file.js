

const getUsers = ()=>{
    return fetch('https://isa-simple-rest-api.herokuapp.com/api/users')
        .then(response => response.json())
        .then((data) => {
            console.log(typeof data);
            var authors = document.getElementById('user');
            for(var value of data) {
                console.log(value.id + ' - ' + value.username);
                var user = document.createElement('li');
                user.innerText = value.id + ' - ' + value.username;
                authors.appendChild(user);
            }
        });
}

getUsers();