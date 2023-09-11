#include <iostream>
using namespace std;

int main () {
    int x;
    cout << "Digite um valor inicial: ";
    cin >> x;

    x+=10; //x = x + 10;
    cout << x << endl;
    
    x-=9; //x = x - 9
    cout << x << endl;
    
    x*=8;
    cout << x << endl;
    
    x/=7;
    cout << x << endl;
    
    x%=6;
    cout << x << endl;

return 0;
}