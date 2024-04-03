// Function to convert a number to the corresponding row-column pair

export const puzzle_convert = (number) => {
    let group_row = Math.floor((number - 1) / 125);
    let index_group = (number-1) % 125;
    let group_col = Math.floor(index_group / 25);
    let index = index_group % 25;
    let row = Math.floor((index) / 5);
    let col = (index) % 5;
        return { group: `${group_row}-${group_col}`, level: `${row}-${col}` };
    
};
// Function to reverse the group and level to a number
export const reverse_puzzle_convert = (group, level) => {
        const [group_row, group_col] = group.split('-').map(Number);
        const [row, col] = level.split('-').map(Number);
        return (group_row*125) + (group_col*25) + (row * 5) + col + 1;
    
};

/*
// Test the functions
const testCases = [1, 5, 6, 10, 25, 26, 27, 30, 31, 50, 51, 75, 76, 100, 101, 125, 126, 150, 151];
testCases.forEach(number => {
    const { group, level } = puzzle_convert(number);
    console.log(`${number} = group: '${group}' level: '${level}'`);
    console.log(`reverse_puzzle_convert('${group}', '${level}') = ${reverse_puzzle_convert(group, level)}`);
});
*/

/*
// Test the functions
console.log(1,puzzle_convert(1));     // Output: { group: '0-0', level: '0-0' }
console.log(5,puzzle_convert(5));
console.log(6,puzzle_convert(6));
console.log(10,puzzle_convert(10));
console.log(11,puzzle_convert(11));
console.log(15,puzzle_convert(15));     
console.log(25,puzzle_convert(25));    // Output: { group: '0-0', level: '4-4' }
console.log(26,puzzle_convert(26));
console.log(30,puzzle_convert(30));
console.log(31,puzzle_convert(31));
console.log(35,puzzle_convert(35));
console.log(36,puzzle_convert(36));
console.log(40,puzzle_convert(40));
console.log(41,puzzle_convert(41));
console.log(45,puzzle_convert(45));
console.log(50,puzzle_convert(50));
console.log(51,puzzle_convert(51));
console.log(75,puzzle_convert(75));    // Output: { group: '1-0', level: '0-0' }
console.log(76,puzzle_convert(76));
console.log(100,puzzle_convert(100));
console.log(101,puzzle_convert(101));
console.log(126,puzzle_convert(126));   // Output: { group: '1-4', level: '1-1' }

console.log(reverse_puzzle_convert('0-0', '0-0'));  // Output: 1
console.log(reverse_puzzle_convert('0-0', '4-4'));  // Output: 25
console.log(reverse_puzzle_convert('1-0', '0-0'));  // Output: 126
console.log(reverse_puzzle_convert('1-4', '1-1'));  // Output: 232

/*no, console.log(puzzle_convert(26)); outputs {group: '0-0', level: '0-0'}
it should output group: '0-1' level: '0-0'
/*
1 = group: '0-0' level: '0-0'
5 = group: '0-0' level: '0-4'
6 = group: '0-0' level: '1-0'
10 = group: '0-0' level: '1-4'
25 = group: '0-0' level: '4-4'
26 = group: '0-1' level: '0-0'
27 = group: '0-1' level: '0-1'
30 = group: '0-1' level: '0-4'
31 = group: '0-1' level: '1-0'
50 = group: '0-1' level: '4-4'
51 = group: '0-2' level: '0-0'
75 = group: '0-2' level: '4-4'
76 = group: '0-3' level: '0-0'
100 = group: '0-3' level: '4-4'
101 = group: '0-4' level: '0-0'
125 = group: '0-4' level: '4-4'
126 = group: '1-0' level: '0-0'
150 = group: '1-0' level: '4-4'
151 = group: '1-1' level: '0-0' */