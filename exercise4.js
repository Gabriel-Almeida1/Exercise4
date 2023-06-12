for (var cont = 0; cont < 5; cont++){
    var num = prompt("Insert a number: ")
    NumInt = parseInt(num)
    for (var cont2 = 0; cont2 < 5; cont2++) {   
        console.log(parseInt(num), " x ", NumInt + 1, ' = ', NumInt * (NumInt + 1))
        NumInt = NumInt + 1
    }
}

