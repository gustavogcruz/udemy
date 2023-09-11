//declaração com VAR com escopo global e de função

//var acessivel fora do bloco

{
    {
        {
            { 
                var sera = 'Será???'

            }
        }          
    }
}

console.log(sera)


// var não acessivel fora do escopo da função
function teste () {
    var local = 123
}

teste()
console.log(local)