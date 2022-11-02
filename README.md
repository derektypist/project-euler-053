# Project Euler 053 - Combinatoric Selections

There are exactly ten ways of selecting three from five, 12345:

    123, 124, 125, 134, 135, 145, 234, 235. 245, and 345

In combinatorics, we use the notation 5C3 = 10.

In general, nCr = n!/(r!(n-r)!), where r &le; n, n! = n x (n-1) x...x 3 x 2 x 1, and 0! = 1.

It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.

How many, not necessarily distinct, values of nCr for 1 &le; n &le; 100, are greater than one-million (or other limits)?

Information at [Project Euler 053](https://projecteuler.net/problem=53)

## UX

**Getting Started**

Enter the limit as a whole number between 100 and 1000000.  Select the Submit Button.  You will see the number of values of nCr, for 1 &le; n &le; 100, greater than the limit.  For example, if you entered 1000, you would expect to get 4626.  If you have made an invalid input, an error message is displayed instead.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 100 or greater than 1000000
- Including leading zeros such as 0100
- Entering a number, but it is not an integer

As a user, I can clear the information or start again by selecting the Reset Button.

As a user, I expect the function `combinatoricSelections(1000)` to return a number.

As a user, I expect the function `combinatoricSelections(1000)` to return 4626.

As a user, I expect the function `combinatoricSelections(10000)` to return 4431.

As a user, I expect the function `combinatoricSelections(100000)` to return 4255.

As a user, I expect the function `combinatoricSelections(1000000)` to return 4075.

User Stories on function `combinatoricSelections(limit)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 053](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-53-combinatoric-selections)

**Information Architecture**

The function `combinatoricSelections(limit)` returns a number, where `limit` is a number.

## Features

Allows the user to enter a number (limit) in order to get the number of values of nCr, for which 1 ≤ n ≤ 100 greater than the limit.  Performs checks on valid user input.  If the input is not valid, an error message is displayed instead.



