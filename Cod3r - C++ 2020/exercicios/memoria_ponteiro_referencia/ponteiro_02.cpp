#include <iostream>
#include <cstdio>
using namespace std;

int main () {

int* p1;
int* p2 = nullptr;

int x = 5;
int y = 10;

p1 = &x;
cout << p1 << endl;
cout << *p1 << endl;

p1 = &y;
cout << p1 << endl;
cout << *p1 << endl;

p2 = p1; // cópia endereço de memória
cout << *p2 << endl;

return 0;
}