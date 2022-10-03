//adding function
var arrayElement = [];
function addElement(){
    var getInput = parseInt(document.getElementById("myInput").value);
    
    if(getInput == ""){
        alert("Please enter the number.");
    }
    else{
        arrayElement.push(getInput);
        getTotal();
        //console.log(arrayElement);
        document.getElementById("output").innerHTML = "Array Elements : [" + arrayElement + "]";
    }

    //console.log(arrayElement);


    checkArraySize();
    //alert('hi');
    //console.log(arrayElement);
}

//deleteing element
function deleteElement(){
    var deleteElement = parseInt(document.getElementById("myInput").value);
    var isNumber = false;

    for(var i=0; i < arrayElement.length; i++){
        if(deleteElement == arrayElement[i]){
            // delete arrayElement[i];
            arrayElement.splice(i, 1); 
            isNumber = true;
        }
    }

    if(isNumber){
        getTotal();
        document.getElementById('output').innerHTML = arrayElement;
    }
    else{
        alert(deleteElement + " is not there in an array...");
    }
    //arrayElement.pop(getInput); 
    document.getElementById("output").innerHTML = "Array Elements : [" + arrayElement + "]";
    checkArraySize(); 
}

//pairs function
function getPairs(){
    //alert('Hii');
    //document.getElementById("output").innerHTML = "Array Elements : [" + arrayElement.join(' ') + "]"; 
    
    let count = 0;
    
    arrayElement.slice();
    arrayElement.sort();
    
    for(let i = 0; i < arrayElement.length; i++){
        if(arrayElement[i] == arrayElement[i + 1]){
            i++;
            count++;
        }
    }
    //console.log(count));
    document.getElementById("pairs").innerHTML = "Numbers of Pairs are : " + count; 
}

//greater than 10
function getGreaterThan10(){
    //var getInput = document.getElementById("myInput").value;

    arrayElement.sort();
    
    var cnt = 0;
    var isNumber = true;
    for (var i = 0; i < arrayElement.length; i++) {
        if (arrayElement[i] > 10) {            
            cnt++;
            isNumber = true;
        } 
    }
    if (isNumber == false) {
        alert("There is no greater than 10 in array.");
    }
    document.getElementById("greater").innerHTML = "&gt10 values are : " + cnt;  
}

//sequence in array
function getSequence() {
    let numberOfSequance = 0;
    let i = 0;
    var newArray = []
    //alert('getSequence function is calling...');

    while (i < arrayElement.length) {
        let number = arrayElement[i];
        let isSequence = false;

        if (arrayElement[i + 1] === number + 1) {
            if (arrayElement[i + 2] === number + 2) {
                if (arrayElement[i + 3] === number + 3) {
                    if (arrayElement[i + 4] === number + 4) {

                        //console.log(`${arrayElement[i]},${arrayElement[i + 1]},${arrayElement[i + 2]},${arrayElement[i + 3]},${arrayElement[i + 4]},`);
                        newArray.push(arrayElement[i], arrayElement[i + 1], arrayElement[i + 2], arrayElement[i + 3], arrayElement[i + 4]);
                        numberOfSequance++;
                        isSequence = true;
                    }
                }
            }
        }
        if(isSequence){
            i=i+5;
            isSequence = false;
        }
        else{
            i++;
        }
    }
    document.getElementById('sequence').innerHTML = "any 5 numbers in sequance are : " + numberOfSequance;
}

//check the size of array
function checkArraySize(){
    for(let i=0; i < arrayElement.length; i++){
        if(arrayElement.length < 7){
            document.querySelector('#pairOperation').disabled = true;
            document.querySelector('#greaterThanOperation').disabled = true;
            document.querySelector('#SequenceOperation').disabled = true;
        }
        else{
            document.querySelector('#pairOperation').disabled = false;
            document.querySelector('#greaterThanOperation').disabled = false;
            document.querySelector('#SequenceOperation').disabled = false;
        }
    }
}

//total function
function getTotal(){
    let sum = 0;
    
    for(let i=0; i < arrayElement.length; i++){
        sum = sum + arrayElement[i];
    }

    document.getElementById("total").innerHTML = "Total : " + sum;
}