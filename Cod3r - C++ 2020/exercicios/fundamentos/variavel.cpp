#include <cstdio>

int main () {

    double preco = 99.80;
    //double preco = 99.99;
    double taxa;
    taxa = 0.08;
    //taxa = 0.10;
    
    double precoFinal = preco * (1 + taxa);
    
    printf("O preco finak %.2f.\n", precoFinal);

    return 0;

}