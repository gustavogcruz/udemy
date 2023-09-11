#include <iostream>
using namespace std;

//https://pt.cppreference.com/w/cpp/language/types
//https://www.geeksforgeeks.org/c-data-types/

main () {

    // tipo bool - ZERO representa FALSE e qualquer número <> de ZERO representa TRUE
    //bool = TRUE or FALSE

    bool isAdmin = true;
    cout << isAdmin << endl;

    //char symbol = '#';
    char symbol('#');
    cout << symbol << endl;

    //int age = 43;
    // modificadores dos tipos: signed unsigned (sem sinal, vai para os positivos) long short
    unsigned short int age = 43;
    cout << age << endl;

    float pi = 3.14; // float - 32 bits
    const double PI = 3.141592; // double - 64 bits
    cout << pi << endl;
    cout << PI << endl;

    //signed unsigned long short
    short int n1 = 1;
    long int n2(1);
    unsigned int n3 = 1;
    long long int n4 = 1;
    cout << n1+n2+n3+n4 << endl;

    return 0;
}