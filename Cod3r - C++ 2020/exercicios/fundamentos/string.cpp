#include <iostream>
using namespace std;

//http://cplusplus.com/reference/string/string/

int main () {

    string msg1 = "Hello ";
    string msg2("World ");
    string msg3(5, '!');

    cout << msg3 << endl;
    cout << msg2.size() << endl;
    cout << msg1.back() << endl;
    cout << msg2[2] << endl;

    //Concatenação de string
    cout << msg1 + msg2 + msg3 << endl;

    msg1 = "Ola ";
    //msg1 += "Ola "; - recebe msg1 declarada inicialmente e junta a string "Ola"
    msg2 = "Mundo ";
    msg3 = "!!!!!";

    cout << msg1 + msg2 + msg3 << endl;

    //concatenação usando metodo append
    cout << msg1.append(msg2).append(msg3);

    return 0;
}