#include <iostream>
#include <cstdio>
using namespace std;

int main () {

    // * -> operador desreferência

    double pi = 3.1415;
    double& piRef = pi;

    cout << piRef << endl;
    cout << &pi << endl;
    cout << *&pi << endl; // pegar o valor da referência

    // * usado para criar ponteiro

return 0;
}