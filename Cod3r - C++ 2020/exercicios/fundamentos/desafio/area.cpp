// area = PI (3.1415) * raio * raio

#include <iostream>
using namespace std;

int main () {

    const double PI = 3.1415;
    double radius;

    cout << "Digite o valor do Raio: ";
    cin >> radius;
    //double area = PI * radius * radius;
    //cout << "O valor da area: " << area << endl;
    cout << "O valor da area: " << PI * radius * radius << endl;
    
    return 0;
}