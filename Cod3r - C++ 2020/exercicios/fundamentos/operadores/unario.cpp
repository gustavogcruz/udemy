#include <iostream>
#include <cstdio>
using namespace std;

int main () {
    int x = 2;
    int y = 1;

    x++; // forma pós fixada;
    ++y; // forma pré fixada;

    printf("%d %d\n", x, y);   

    --x; // forma pré fixada;
    y--; // forma pós fixada;

    printf("%d %d\n", x, y);   

    //x = 2 && y=3
    printf("%d", x-- == ++y); //prefix tem maior procedência que postfix. Então a comparação ocorre antes do postfix. Assim a expressão é verdadeira
    
return 0;
}