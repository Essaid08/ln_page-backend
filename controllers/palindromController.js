
// removing all non letters and numbers from the input before test
// converting all chars to lower case for proper comparison
const justLeteersAndNums = (string) => {
    return string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

const isPalindrome = function (input) {

    const cleanedStr = justLeteersAndNums(input);

    // set pointers to the first and the last chars of the input
    let left = 0;
    let right = cleanedStr.length - 1;
    
    // if the right char not equal the left one then its not a valid palindrome
    // will return false before loopin through the hole string
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }

        // incrument the left and the right untill they reach each others
        left++;
        right--;
    }
    // then if the while loop does not return false will return true cause is a valid palindrom
    return true;
};


export default isPalindrome;
