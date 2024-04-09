let displayvalue = '';

function appendToDisplay(value){
    displayvalue += value;
    document.getElementById('display').value=displayvalue;

}
function clearDisplay(){
    displayvalue = '';
    document.getElementById('display').value = '';
}
function calculate(){
    try{
        displayvalue = eval(displayvalue);
        document.getElementById('display').value = displayvalue;
    } catch (error){
        document.getElementById('display').value = 'Error';
    }
}
