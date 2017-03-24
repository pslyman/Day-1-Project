/*```Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]```
*/


var trueCount = 0, falseCount = 0;
function checkIfFalse(value, index, ar) {

arrayObj.forEach(function(index){
  if(index.value == true){
      trueCount++;
    }
    else if(index.value == true){
      falseCount++;

    }
  });
