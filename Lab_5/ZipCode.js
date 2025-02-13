// creat a Function to check if zipcode is corrrect
function isMinnesotaZip(code){
    // Checking ZipCode is range btn 55001 to 56763
    if (code >= 55001 && code <= 56763){
        return true;
    }else {
        return false;
    }
}
// checking if it is true with various ZipCode
console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55423))
console.log(isMinnesotaZip(55483))
console.log(isMinnesotaZip(55603))
console.log(isMinnesotaZip(55476))
console.log(isMinnesotaZip(55763333))