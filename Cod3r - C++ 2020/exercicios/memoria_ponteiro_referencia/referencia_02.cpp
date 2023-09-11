#include <iostream>
#include <cstdio>
using namespace std;

int main () {
    int x = 7;
    int& xRef = x;

cout << x << "\t" << &x << endl;
cout << xRef << "\t" << &x << endl;

x++;
cout << xRef << "\t" << &x << endl;

xRef --;
cout << x << "\t" << &x << endl;

return 0;
}