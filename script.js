

    function boom(i) {
        document.getElementById('boomview').style.visibility='visible';
        document.body.style.backgroundColor='red';
    for (let i2 = 0; i2 < i; i2++) {
        let p = i2%7 ==0? 'boom': i2;
        console.log (p);
    }
}

function boom2() {
    document.body.style.backgroundColor='yellow';
    document.getElementById("boomview2").style.visibility='visible';
    let i=1;
    while (i%7 !=0) {
        console.log(i);
        i++;
    }
    console.log('just boom');
}   
function divide7(num) {
    let result = Math.floor(num / 7);
    document.getElementById('divide7-result').innerText = result;
}

function range() {
    debugger
    let min =document.getElementById('range_min').value;
    let max =document.getElementById('range_max').value;
    for(let i = min; i < max; i++) {
        document.getElementById('range_result').innerText += i + ' ';
    }
}


