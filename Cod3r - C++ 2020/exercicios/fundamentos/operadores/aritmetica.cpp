#include <iostream>
using namespace std;

int main () {

    /*cout << 1 + 1 << endl;
    cout << 1 - 1 << endl;
    cout << 1 * 1 << endl;
    cout << 1 / 1 << endl;
    cout << 1 % 1 << endl; // operador módulo - retorna o resto da divisão
    cout << 1 + 3 * 7 << endl;
    cout << (1 + 3) * 7 << endl;*/

    int x;
    int y;

    cout << "Digite o primeiro numero: ";
    cin >> x;

    cout << "Digite o segundo numero: ";
    cin >> y;

    cout << "Resultado" << endl;
    cout << x + y << endl;
    cout << x - y << endl;
    cout << x * y << endl;
    cout << x / y << endl;
    cout << x % y << endl;
    cout << x + y * 2 << endl;
    cout << (x + y) * 2 << endl;

return 0;
}