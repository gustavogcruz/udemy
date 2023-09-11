#include <iostream>
#include <cstdio>
using namespace std;

int main () {

    int value = 98765;
    int& ref = value; // referência pega diretamente o valor
    int* pointer = &value; // ponteiro pega a referência

cout << value << "\t" << ref << "\t" << *pointer << endl;
cout << &value << "\t" << &ref << "\t" << pointer << endl;

return 0;
}