const accountId  = 14455245
let accountEmail = "adityaraj0182@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi" 
let accountState;

//accountId = 2 // not allowed




accountEmail = "hc@hc.com"
accountPassword = "abcdef"
accountCity = "Jaipur"

console.log(accountId);

/*
--Note--
never use 'var' keyword
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])