//Feito

const verificaTipoTriangulo = (a,b,c) => {
    if (a == b && b == c) {
        console.log ('Equilátero')
    } else
    if (a == b || a == c || c == b) {
        console.log ('Isósceles')
    } 
    else 
    {
        console.log ('Escaleno')
    }

}
verificaTipoTriangulo(2,2,2)
