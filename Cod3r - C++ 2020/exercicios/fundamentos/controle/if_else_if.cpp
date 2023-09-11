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
   } else if (n2 >= n1 && n2>=n3) {
    cout << n2 << endl;
   } else {
    cout << n3 << endl; 
   }
   
     
return 0;
}