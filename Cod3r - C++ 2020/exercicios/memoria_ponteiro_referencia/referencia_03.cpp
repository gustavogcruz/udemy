#include <iostream>
#include <cstdio>
using namespace std;

int main () {

    //string& badRef; // referência deve ser inicializada
    
    string saudacoes = "Ola";
    string& ref = saudacoes;

    cout << saudacoes << "\t" << ref << endl;
    
    string name = "Theo";
    ref = name;

    cout << name << "\t" << ref << "\t" << saudacoes << endl;
    cout << &name << "\t"<< &saudacoes << "\t" << &ref << endl;

    ref.append ("!!!!");
    cout << saudacoes;

return 0;
}