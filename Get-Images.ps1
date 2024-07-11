$colors = @("Blue", "Red", "Green")

foreach ($color in $colors) {
    foreach ($dicenum in 1..6){
        Invoke-WebRequest -URI "http://illuminations.nctm.org/Tools/Petals/$color$dicenum.jpg" -OutFile ./src/$color$dicenum.jpg
    }
}

