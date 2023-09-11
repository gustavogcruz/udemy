#include <iostream>
#include <cstdio>
using namespace std;

int main () {

    int arr[] = {1,2,3,4,5};
    cout << &arr[0] << endl;

     int* p1 = &arr[0];
    cout << *p1 << endl;

    p1++;
    cout << *p1 << endl;

    cout << "------" << endl;
    cout << p1 [0]<< endl; // [0] mesmo que *
    cout << p1 [1]<< endl;

    int w = 123;
    int* p2 = &w;
    cout << p2 << endl; 
    cout << *p2 << endl; 
    cout << p2[0] << endl;

    *p2 = 321;
    cout << *p2 << endl; 
    cout << w << endl; 

return 0;
}