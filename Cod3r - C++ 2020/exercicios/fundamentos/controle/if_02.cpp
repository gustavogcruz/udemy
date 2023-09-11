#include <iostream>
#include <cstdio>
using namespace std;

int main () {
    int numero;
    cout << "Digite um numero: ";
    cin >> numero;
    
    if (numero % 2 == 0) {
        cout << "Numero Par." << endl;
    } else cout << "Numero Impar." << endl;

return 0;
}