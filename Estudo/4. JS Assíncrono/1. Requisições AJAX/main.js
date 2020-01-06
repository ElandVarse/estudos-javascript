var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/ElandVarse');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

//Ajax principal forma de consumir informações de servidor