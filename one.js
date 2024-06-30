// simple function 

function greet(user){
    return console.log('Hello,'+user)
}

function verify(user,age){
    if (age>17){
	    greet(user)  
}else{
console.log(`You aren't eligible, ${user}`)
}
}

verify("Vishal",18)
verify("Naitik",15)
