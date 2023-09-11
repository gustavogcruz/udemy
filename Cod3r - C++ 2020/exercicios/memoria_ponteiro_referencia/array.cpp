#include <iostream>
#include <cstdio>
using namespace std;

int main () {

    // int valor [5]; ou
    //  index       0  1  2  3  4
    int valor [] = {1,2,3,4,5};

    cout << valor [0] << endl;
    cout << valor [4] << endl;
    cout << sizeof valor[3] << endl;
    cout << sizeof valor << endl;
    cout << sizeof valor / sizeof valor [0] << endl;

return 0;
}