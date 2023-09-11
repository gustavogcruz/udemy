#include <iostream>
#include <cstdio>
using namespace std;

int main () {
    double notaFinal;
    cout << "Digite a nota final: ";
    cin >> notaFinal;

    // sentença de código ou bloco
    if (notaFinal >= 7) {
    cout << "Nota Excelente!" << endl;
    cout << "Aprovado!" << endl;
    } else cout << "Reprovado" << endl;

return 0;
}