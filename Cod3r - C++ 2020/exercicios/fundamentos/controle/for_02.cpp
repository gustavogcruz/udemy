#include <iostream>
#include <cstdio>
using namespace std;

int main () {

    
    int  total = 0; // use Total como double ou faça CAST para receber o valor com casa decimal
    int qtd = 0;
    double media = 0;

    // for (;;) {  
                    //for infinito
    // }

    for (int numero = 0; numero != -1; ) {

     cout << "Digite um numero ou -1 para finalizar: ";
     cin >> numero;
     
     if (numero != -1) {
         total += numero;
         qtd++;
         //cast INT para Double
        media = ((double)total) / qtd;
     } else if (numero == -1) 
     {
         cout << "\n( Fim do Programa )\n" << endl 
         << "Soma dos valores digitados: " << total << endl
         << "Quantidade de numeros digitados: "  << qtd << endl
         << "Media dos valores digitados: " << media;        
     }
    }
    

return 0;
}