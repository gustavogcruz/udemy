#include <iostream>
#include <cstdio>
using namespace std;

int main () {
    double notaFinal;
    cout << "Informe a Nota Final: ";
    cin >> notaFinal;

    bool bomCoportamento;
    cout << "O Aluno possui bom comportamento? ";
    cin >> bomCoportamento;

    bool bomEstudante = notaFinal >=9 && bomCoportamento;
    bool medioEstudante = notaFinal >=9 ^ bomCoportamento; // OU exclusivo - uma das alternativas precisa de verdadeira para a sentença ser verdadeira
    bool ruimEstudante = notaFinal <=3 && !bomCoportamento;
    bool financiamentoCancelado = notaFinal <=3 || !bomCoportamento;

    cout << "Bom Estudante? " << bomEstudante << endl;
    cout << "Estudante Mediano? " << medioEstudante << endl;
    cout << "Estudante Ruim? " << ruimEstudante << endl;
    cout << "Financiamento Cancelado? " << financiamentoCancelado << endl;

    //Tabela Verdade
    // AND (&&)
    cout << "AND (&&)..." << endl; 
    cout << (true && true) << endl; // 1 - TRUE
    cout << (true && false) << endl; // 0 - FALSE
    cout << (false && true) << endl; // 0
    cout << (false && false) << endl; // 0

    // AND (||)
    cout << "OR (||)..." << endl; 
    cout << (true || true) << endl; // 1 - TRUE
    cout << (true || false) << endl; // 1
    cout << (false || true) << endl; // 1
    cout << (false || false) << endl; // 0 - FALSE

    // XOR (^ - !=)
    cout << "XOR (^)..." << endl; 
    cout << (true ^ true) << endl; // 0 - FALSE
    cout << (true ^ false) << endl; // 1 - TRUE
    cout << (false ^ true) << endl; // 1
    cout << (false ^ false) << endl; // 0

    // NOT (!)
    cout << "NOT (!)..." << endl; 
    cout << !(true) << endl; // 0 - FALSE
    cout << !(false)<< endl; // 1 - TRUE
    cout << !!(true)<< endl; // 1
    
return 0;
} 