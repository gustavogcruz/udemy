#include <iostream>
#include <typeinfo>

using namespace std;

int main()
{
    // inferência de tipos
    auto a = 1;
    //int a = 1;
    double b = 1.2; 
    bool c = false;

    cout << typeid(a).name() << endl
         << typeid(b).name() << endl
         << typeid(c).name() << endl;

    return 0;
}