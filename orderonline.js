//validate module

function validateOrder(e){
    e.preventDefault();
    var valid = true;

    // display warning if firstName is not entered
    if(order.fName.value === ""){
        document.querySelector('#fNameError').innerHTML="*Name required*";
        valid = false;
    }
    // display warning if telephone is not entered
    if(order.telephone.value === ""){
        document.querySelector('#telError').innerHTML="*phone number required*";
        valid = false;
    }
    // display warning if date is not selected
    if(order.pickupDate.value === ""){
      document.querySelector('#dateError').innerHTML="*Please choose a date*";
      valid = false;
    }

    if(valid){alert("Successfully submitted")};

    return valid;
};


//form element events
//remove warning if fName has input; set cookie for name
document.querySelector('#fName').addEventListener("blur", function(){
    if(this.value !== ""){
      fNameError.innerHTML = "";
      setCookie("Name", this.value, 365);
    }
});
//remove warning if phone number has input; set cookie for mobile
document.querySelector('#telephone').addEventListener("blur", function(){
    if(this.value !== ""){
      telError.innerHTML = "";
      setCookie("Phone", this.value, 365);
    }
});
//remove warning if date is selected
document.querySelector('#pickupDate').addEventListener("blur", function(){
    if(this.value !== ""){dateError.innerHTML = "";}
});

// Add an event to the form on submit to validate input
document.order.addEventListener("submit", validateOrder);



//limit earliest date to today
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

if(day<10){
    day='0'+day
  }
  if(month<10){
    month='0'+month
  }
let date = year+'-'+month+'-'+day;
document.getElementById("pickupDate").setAttribute("min", date);


// calculate subtotal
function update(val,price,id){
  console.log(id);
  let subtotal = val * price;
  document.getElementById(id).value = subtotal;
  updateTotal()
}


// calculate total prive
function updateTotal(){
  let total = 0;
  subtotals = document.querySelectorAll('.subtotal');

  for (i = 0; i < subtotals.length; i ++){
    total += Number(subtotals[i].value);
  };
  document.getElementById('totalPrice').value = total.toFixed(2);
};


//cookie for returned user
function setUser(){
  let name = getCookie("Name");
  let phone = getCookie("Phone");
  document.getElementById('fName').value = name;
  document.getElementById('telephone').value = phone;
};

setUser();
