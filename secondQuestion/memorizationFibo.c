#include <stdio.h>

int memo[1000]; // increase this value if you want to calculate more than F(1000)

int memorizationFibo(int n)
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
    if (memo[n] != -1)
        return memo[n];
    return memo[n] = memorizationFibo(n - 1) + memorizationFibo(n - 2);
}

int main() {
    int n = 9; // Example value
    for (int i = 0; i <= n; i++) // initialize memo array with -1
        memo[i] = -1;

    printf("F(%d) = %d\n", n, memorizationFibo(n));
    return 0;
}


/*

******************** Advantages:

- Avoids recalculating the same values by storing already calculated values in the memo array.

- Improves performance compared to the naive recursive approach.


******************** Disadvantages:

- Still has a relatively high space complexity due to the memoization array.

- May have a large constant factor for smaller values of n due to function call overhead.

*/