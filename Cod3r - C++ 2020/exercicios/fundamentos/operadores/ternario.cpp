#include <iostream>
#include <cstdio>
using namespace std;

int main () {
// ternário - expressão (True / False) ? 
    bool ensolarado = false;
    string resultado = ensolarado ? ":)" : ":(";
    cout << resultado << endl;

    double saldoAtual = 1234.56;
    double valor;

    cout << "Informe o valor: ";
    cin >> valor;

    char creditoOuDebito;
    cout << "Credito (c) ou Debito (d): ";
    cin >> creditoOuDebito;

    cout << "Saldo atual: " << saldoAtual << endl;

    saldoAtual += creditoOuDebito == 'c' ? valor : -valor;

    cout << "Saldo Final: " << saldoAtual << endl;

return 0;
}