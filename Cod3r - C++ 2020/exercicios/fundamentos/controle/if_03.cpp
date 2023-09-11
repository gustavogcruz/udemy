#include <iostream>
#include <cstdio>
using namespace std;

int main () {

    int n1, n2, n3;

    cin >> n1;
    cin >> n2;
    cin >> n3;

   if (n1 >= n2 && n1>=n3) {
    cout << n1 << endl;
   }     
   
   if (n2 >= n1 && n2>=n3) {
    cout << n2 << endl;
   }     
   
   if (n3 >= n1 && n3>=n2) {
    cout << n3 << endl;
   }     

return 0;
}