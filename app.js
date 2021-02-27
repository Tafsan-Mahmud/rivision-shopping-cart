document.getElementById('plus-btn-phone').addEventListener('click', function () {
    daynamicPhoneInput('plus-phone');
    // console.log('clicked pluse')
});
document.getElementById('minus-btn-phone').addEventListener('click', function () {
    daynamicPhoneInput('minus-phone');
    // console.log('clicked minus')
});
function daynamicPhoneInput(user) {
    const input = document.getElementById('input-phone');
    const inputValue = parseInt(input.value);
    let daynamicInput1 = inputValue;
    if (user == 'plus-phone') {
        daynamicInput1 = inputValue + 1;
    }
    if (user == 'minus-phone' && inputValue > 0) {
        daynamicInput1 = inputValue - 1;
    }
    input.value = daynamicInput1;
    const totalPhoneAmount = daynamicInput1 * 1219;
    document.getElementById('amount-phone').innerText = totalPhoneAmount;
    calculate();

}

document.getElementById('plus-btn-case').addEventListener('click', function () {
    daynamicCaseInput('plus-case');
});
document.getElementById('minus-btn-case').addEventListener('click', function () {
    daynamicCaseInput('minus-case');
});

function daynamicCaseInput(user2) {
    const input = document.getElementById('input-case');
    const inputValue = parseInt(input.value);
    let daynamicInput2 = inputValue;
    if (user2 == 'plus-case') {
        daynamicInput2 = inputValue + 1;
    }
    if (user2 == 'minus-case' && inputValue > 0) {
        daynamicInput2 = inputValue - 1;
    }
    input.value = daynamicInput2;
    const totalCaseAmount = daynamicInput2 * 59;
    document.getElementById('amount-case').innerText = totalCaseAmount;
    calculate();
}



function calculate(){
    const inputPhone = document.getElementById('input-phone');
    const parseIntPhoneValue = parseInt(inputPhone.value);
    const inputCase = document.getElementById('input-case');
    const parseIntCaseValue = parseInt(inputCase.value);
    const subTotal = parseIntPhoneValue * 1219 + parseIntCaseValue * 59 ;
    document.getElementById('subTotal').innerText = subTotal;
    let totalTax = subTotal * 0.1;
    totalTax = totalTax.toFixed(4)
    document.getElementById('tax').innerText = totalTax;
    const totalPrice = Math.round(subTotal + totalTax);
    document.getElementById('total').innerText = totalPrice;
}

document.getElementById('cancel1').addEventListener('click', function(){
    document.getElementById('input-phone').value = 00;
    document.getElementById('amount-phone').innerText = 00;
   
});
document.getElementById('cancel2').addEventListener('click' , function(){
    document.getElementById('input-case').value = 00;
    document.getElementById('amount-case').innerText = 00;
    
});
document.getElementById('cancel3').addEventListener('click',function(){
    document.getElementById('subTotal').innerText = 00;
    document.getElementById('tax').innerText = 00;
    document.getElementById('total').innerText = 00;
})

document.getElementById('error').addEventListener('click', function(){
    const inputPhone = document.getElementById('input-phone').value;
    const inputCase = document.getElementById('input-case').value;
    if(inputPhone < 1 && inputCase < 1 ){
        alert('please buy 1 item than check out ')
        // document.getElementById('modalHtml').innerHTML = '';  //its not working 

    }
    else{
        document.getElementById('modalHtml').innerHTML = ` <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
           <div class="modal-content">
              <div class=" d-flex justify-content-center">
                 <img id="img-sizing" src="images/green-tik.png" alt="">
              </div>
              <div class="modal-body d-flex justify-content-center ">
                 <div>
                    <h4> Congratulations Your E-Shopping Payment <br> Successfully Paid </h4>
                    <p>Thanks For Staying With Us</p>
                 </div>
              </div>
              <div class="modal-footer d-flex justify-content-center ">
                 <button type="button" class=" btn btn-primary" data-bs-dismiss="modal">Close</button>
 
              </div>
           </div>
        </div>
     </div>`
    }
});