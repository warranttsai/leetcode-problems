## 1456. Maximum Number of Vowels in a Substring of Given Length

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

**Vowel letters** in English are 'a', 'e', 'i', 'o', and 'u'.

**Example 1:**

**Input:** s = "abciiidef", k = 3
**Output:** 3
**Explanation:** The substring "iii" contains 3 vowel letters.

**Example 2:**

**Input:** s = "aeiou", k = 2
**Output:** 2
**Explanation:** Any substring of length 2 contains 2 vowels.

**Example 3:**

**Input:** s = "leetcode", k = 3
**Output:** 2
**Explanation:** "lee", "eet" and "ode" contain 2 vowels.

Constraints

- 1 <= s.length <= 105
- s consists of lowercase English letters.
- 1 <= k <= s.length

### Note

**Sliding Window Algorithm**

The Sliding Window Algorithm is a technique used to solve problems that involve finding a subset of elements in an array, string, or any other data structure that satisfy a certain condition.

**The algorithm typically involves the following steps:**

1. Initialize two pointers, often called left and right, to the start of the data structure.
2. Expand the window by moving the right pointer and updating the current state (e.g., adding elements to a counter).
3. If the current state no longer satisfies the condition, contract the window by moving the left pointer and updating the state accordingly (e.g., removing elements from the counter).
4. Keep track of the best result seen so far (e.g., the maximum or minimum value).
5. Repeat steps 2-4 until the right pointer reaches the end of the data structure.

Sample Problem and Solution

    Let's consider the example of finding the maximum sum of any contiguous subarray of size k in an array.

Problem:

    Given an array of positive integers [3, 5, 2, 1] and a positive number k=2, find the maximum sum of any contiguous subarray of size k. Solution using the Sliding Window Algorithm:

1. Initialize left = 0, right = 0, and max_sum = 0.
2. Calculate the sum of the first k elements: current_sum = 3 + 5 = 8.
3. Update max_sum = 8.
4. Slide the window by incrementing right: current_sum = current_sum + 2 - 3 = 7.
5. Update max_sum = 8 (since 8 is still greater than 7).
6. Slide the window again: current_sum = current_sum + 1 - 5 = 3.
7. Update max_sum = 8.
8. Slide the window one more time: current_sum = current_sum + 7 - 2 = 8.
9. Update max_sum = 8.
10. Return max_sum = 8.
