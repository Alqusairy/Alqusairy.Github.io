function signin(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
console.log(username);
console.log(password)
if (username === 'Galahad' && password=== 'admin'){
    location.href = 'welcome.html'
} else {
   alert ('wrong input') ;
}
}
