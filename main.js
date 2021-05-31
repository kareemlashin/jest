/* 
* values function
* [1] return 0 if no number
* [3] return number if its passed
* [2] return sum number if its passed
*/
function values(...num) {
    return num.reduce((pv,cv)=>{return pv + cv},0)
}

module.exports=values;