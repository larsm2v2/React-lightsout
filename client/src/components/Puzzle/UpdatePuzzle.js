//Needs Testing
/*
const fs = require('fs');

// Read the content of the puzzle.js file
fs.readFile('Puzzle.js', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse the JavaScript object from the file content
    const puzzles = JSON.parse(data);

    // Define the new subarray
    const newSubarray = ['new', 'array', 'elements'];

    // Overwrite the subarray in the puzzles object
    puzzles['0-0']['4-4'] = newSubarray;

    // Convert the puzzles object back to JavaScript code
    const updatedCode = `const puzzles = ${JSON.stringify(puzzles, null, 4)};\n\nexport default puzzles;`;

    // Write the updated code back to the file
    fs.writeFile('puzzle.js', updatedCode, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('puzzle.js updated successfully!');
    });
});
*/