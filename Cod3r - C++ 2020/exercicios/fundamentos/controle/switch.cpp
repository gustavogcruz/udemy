#include <iostream>
#include <cstdio>
using namespace std;

int main () {
    int mes;
    cout << "Digite o mes (MM): ";
    cin >> mes;

    int qtdDiasMes;

    // if (expressão)
    // while (expressão)
    // for (;expressão;)

    switch (mes)
    {
    case 2:
        qtdDiasMes = 28;
        break; 
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        qtdDiasMes = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        qtdDiasMes = 30;
        break;
    default:
        qtdDiasMes = -1;

    }
    cout << "Dias: " << qtdDiasMes << endl; 

return 0;
}