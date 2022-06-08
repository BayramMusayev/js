let randomNum = Math.floor(Math.random() * 10);
let say = 0;


function text() {

    let eded = document.getElementById("first").value;


    if (eded == randomNum) {
        say = 0;
        alert('cavab duzdur');

    } else if (eded > randomNum) {
        say = say + 1;
        alert('daha kicik eded sec');
    }
    else {
        say = say + 1;
        alert('daha boyuk eded sec');
    }

    if (say == 3) {
        alert('udduzdun' + ' ' + randomNum);
    }



    // console.log("eded  " + eded, "random  " + randomNum)

    // let first = (eded == randomNum) ? 'cavab duzdur'  :
    //  (eded > randomNum) ? 'daha kicik eded sec' : 'daha boyuk eded sec';

}
