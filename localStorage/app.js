/* $(document).ready(function(){

}); */

var localStorage = {
  car : {
    color : 'blue',
    doors: 4,
    make: 'Subaru'
  }
};
//data in
localStorage.setItem('car', JSON.stringify(data));
//data back out
JSON.parse(localStorage.getItem('car'));
//i.e. to set as variable when you pull it back out
var car = JSON.parse(localStorage.getItem('car'));
