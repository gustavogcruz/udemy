#include <iostream>
#include <cstdio>
using namespace std;

int main () {

    int a = 10; // 32 bits = 4 bytes
    
    cout << a << "\t" << &a << endl;
    
    string name = "Theo";
    
    cout << name << "\t" << &name << endl;

return 0;
}  