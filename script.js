var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];

var n=1;
var x=0;

function Addrow(){
      var addrown = document.getElementById('values');
      var newrow = addrown.insertRow(n);

      list1[x] = document.getElementById("fname").Value;
      list2[x] = document.getElementById("lname").Value;
      list3[x] = document.getElementById("food").Value;
      list4[x] = document.getElementById("address").Value;
      list5[x] = document.getElementById("state").Value;
      list6[x] = document.getElementById("country").Value;
      list7[x] = document.getElementById("zip").Value;

      cel1.innerHTML = list1[x];
      cel2.innerHTML = list2[x];
      cel3.innerHTML = list3[x];
      cel4.innerHTML = list4[x];
      cel5.innerHTML = list5[x];
      cel6.innerHTML = list6[x];
      cel7.innerHTML = list7[x];
       
      var cel1 = newrow.insertCell(0);
      var cel2 = newrow.insertCell(1);
      var cel3 = newrow.insertCell(2);
      var cel4 = newrow.insertCell(3);
      var cel5 = newrow.insertCell(4);
      var cel6 = newrow.insertCell(5);
      var cel7 = newrow.insertCell(6);



      n++;
      x++;
       
}