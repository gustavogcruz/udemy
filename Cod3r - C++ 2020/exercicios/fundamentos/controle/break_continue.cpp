#include <iostream>
#include <cstdio>
using namespace std;

int main () {

// int i = 0;

//     for (; i < 10; i++) { //variavel quando declarada dentro do FOR,é acessada somente neste ponto
        
//         //if (i == 5) {            
//         if (i % 2 == 0) {        
//             //break;
//             continue;
//         }
//     cout << i << endl;  
//     }
//     //cout << i << endl;

    for (int i = 0; i < 10; i++) {
         for (int j = 0; j < 10; j++) {
             if (j == 2){
                 break;
             }
             cout << i << " " << j << endl;
         }
    }

    cout << "Fim" << endl;

return 0;
}