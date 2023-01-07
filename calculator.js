let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let displayValue = '';
for(item of buttons){
    item.addEventListener('click',(clickbutton)=>{
        TextButton = clickbutton.target.innerText;
        console.log("the clicked button is",TextButton);
        if(TextButton == 'x'){
            TextButton = '*';
            displayValue  += TextButton;
            display.value = displayValue;
        }
        else if(TextButton == 'c'){
            displayValue  = "";
            display.value = displayValue;
        }
        else if(TextButton =='='){
            display.value = eval(displayValue);
        }
        else{
            displayValue  += TextButton;
            display.value = displayValue;
        }
    })
}
