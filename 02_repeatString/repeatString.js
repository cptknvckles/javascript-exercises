const repeatString = function(string, num) {
    let newString = ''
    let error = 'ERROR'
     if(num >= 0){
        for(let i = 1; i <= num; i++){
        newString += string
        }
      }else{
        return error
      }
    
    return newString
};

// Do not edit below this line
module.exports = repeatString;
