// WRITE YOUR CODE HERE
const someArray = [0, "apple", true, 723];

const randomIdx = Math.floor(Math.random() * someArray.length);

console.log(someArray[randomIdx]);

const studentNames = ['Andy', 'Bella', 'Carlo', 'Delilah', 'Eloise', 'Fiona']

console.log(studentNames.length)

const greeting = () => {
    studentNames.forEach((student) => {
        const message = `Welcome to the class ${student}.`;
        console.log(message);
    });
}
greeting();  

studentNames[0] = 'Aisha'

if (studentNames[0] != 'Andy') {
    greeting();
}

const finalIndex = studentNames.length - 1
console.log(studentNames[finalIndex])