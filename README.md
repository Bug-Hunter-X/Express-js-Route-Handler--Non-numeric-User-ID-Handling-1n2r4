# Express.js Route Handler: Non-numeric User ID Handling

This repository demonstrates a common error in Express.js route handlers where non-numeric user IDs are not properly handled, leading to potential crashes or unexpected behavior.

## Bug
The `bug.js` file contains an Express.js route handler that retrieves user information based on a provided ID.  It assumes that the ID is always a number, attempting to parse it using `parseInt()`.  If a non-numeric ID is provided, this will lead to errors.

## Solution
The `bugSolution.js` file demonstrates the correct approach, which includes input validation to ensure the user ID is numeric before proceeding.

## How to run
1. Clone the repository.
2. Navigate to the directory.
3. Install dependencies: `npm install express`
4. Run the buggy code: `node bug.js` (you will need to provide some user data).
5. Run the fixed code: `node bugSolution.js`