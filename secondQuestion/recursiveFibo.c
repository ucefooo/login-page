#include <stdio.h>

int recursiveFibo(int n)
{
    if (n < 0)
    {
        printf ("Error: F(%d) is undefined\n", n);
        return -1;
    }
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    return recursiveFibo(n - 1) + recursiveFibo(n - 2);
}

int main()
{
    int n = 9; // Example value
    printf("F(%d) = %d\n", n, recursiveFibo(n));
    return 0;
}

/*
***************** Advantages:

- Directly represents the mathematical recurrence relation.

- Simple and easy to understand.


***************** Disadvantages:

- Exponential time complexity: It recalculates the same values multiple times, leading to inefficient performance for larger n.


*/