function win() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if (b1 == "X" && b2 == "X" && b3 == "X") {
        document.getElementById("end").innerHTML = "Player X won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player X won!!!")
    }
    else if (b4 == "X" && b5 == "X" && b6 == "X") {
        document.getElementById("end").innerHTML = "Player X won!!!";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player X won!!!")
    }

    else if (b7 == "X" && b8 == "X" && b9 == "X") {
        document.getElementById("end").innerHTML = "Player X won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        
        resetgame()
        window.alert("Player X won!!!")
    }

    else if (b1 == "X" && b4 == "X" && b7 == "X") {
        document.getElementById("end").innerHTML = "Player X won!!!";
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player X won!!!")
    }

    else if (b2 == "X" && b5 == "X" && b8 == "X") {
        document.getElementById("end").innerHTML = "Player X won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player X won!!!")
    }

    else if (b3 == "X" && b6 == "X" && b9 == "X") {
        document.getElementById("end").innerHTML = "Player X won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b2").disabled = true;
        resetgame()
        window.alert("Player X won!!!")
    }

    else if (b1 == "X" && b5 == "X" && b9 == "X") {
        document.getElementById("end").innerHTML = "Player X won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b3").disabled = true;
        
        resetgame()
        window.alert("Player X won!!!")
    }

    else if (b3 == "X" && b5 == "X" && b7 == "X") {
        document.getElementById("end").innerHTML = "Player X won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player X won!!!")
    }

    else if (b1 == "O" && b2 == "O" && b3 == "O") {
        document.getElementById("end").innerHTML = "Player O won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player O won!!!")
    }
    else if (b4 == "O" && b5 == "O" && b6 == "O") {
        document.getElementById("end").innerHTML = "Player O won!!!";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player O won!!!")

    }

    else if (b7 == "O" && b8 == "O" && b9 == "O") {
        document.getElementById("end").innerHTML = "Player O won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        
        resetgame()
        window.alert("Player O won!!!")
    }

    else if (b1 == "O" && b4 == "O" && b7 == "O") {
        document.getElementById("end").innerHTML = "Player O won!!!";
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player O won!!!")
    }

    else if (b2 == "O" && b5 == "O" && b8 == "O") {
        document.getElementById("end").innerHTML = "Player O won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player O won!!!")
    }

    else if (b3 == "O" && b6 == "O" && b9 == "O") {
        document.getElementById("end").innerHTML = "Player O won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b2").disabled = true;
        
        resetgame()
        window.alert("Player O won!!!")
    }

    else if (b1 == "O" && b5 == "O" && b9 == "O") {
        document.getElementById("end").innerHTML = "Player O won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b3").disabled = true;
        
        resetgame()
        window.alert("Player O won!!!")
    }

    else if (b3 == "O" && b5 == "O" && b7 == "O") {
        document.getElementById("end").innerHTML = "Player O won!!!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        
        resetgame()
        window.alert("Player O won!!!")
    }
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        //document.getElementById('print').innerHTML = "Match Tie";
           // window.alert("Match Tied");
           resetgame();
    }

        if (flag == 1) {
            document.getElementById("print").innerHTML = "Player X turn."
        }
        else {
            document.getElementById("print").innerHTML = "Player Y turn."
        }
    
}

function resetgame() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';

}

flag = 1;

function g1() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function g2() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function g3() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function g4() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function g5() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function g6() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function g7() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function g8() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function g9() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}

