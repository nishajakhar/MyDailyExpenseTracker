
var total = 0;

document.querySelector('.submit').addEventListener(click, Function(){
                             
                             
                             var amount = document.querySelector('#amount').textContent;
                        total = total +amount;
                        document.querySelector('#total').textContent = total;
                             })

