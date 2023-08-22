#include <stdio.h>

int iterativeFibo(int n)
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
    
    int tab[n + 1];
    tab[0] = 0;
    tab[1] = 1;
    
    for (int i = 2; i <= n; i++)
        tab[i] = tab[i - 1] + tab[i - 2];
    
    return tab[n];
}

int main()
{
    int n = 7; // Example value
    printf("F(%d) = %d\n", n, iterativeFibo(n));
    return 0;
}


/*

************ Advantages:

- Linear time complexity: Iterates through values of n and calculates the result in a bottom-up manner.

- Lower space complexity compared to memoization due to the smaller tab array.

************** Disadvantages:

- Requires more code to implement compared to the recursive and memoization approaches.

- May have a slightly larger constant factor due to the array initialization and loop overhead.


*/
