# Type-Related Error in React Component

This repository demonstrates a common type-related error in React components where the state is accidentally updated with an incorrect type, leading to unexpected behavior or runtime errors.

## Bug Description
The `MyComponent` attempts to update the `count` state with a string ('0') instead of a number (0). This is a subtle issue that can lead to type errors when the state is used in subsequent calculations or comparisons.

## Solution
The solution involves ensuring the `count` state is updated with the correct data type (number).