// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.


var currPosition = { x: 0, y: 0 };
var currDir = 'N';
var legend: any = { 'N': { 'L': 'W', 'R': 'E' }, 'E': { 'L': 'N', 'R': 'S' }, 'S': { 'L': 'E', 'R': 'W' }, 'W': { 'L': 'S', 'R': 'N' } };

function isRobotBounded(instructions: string): boolean {

    for (let i = 0; i < 4; i++) {
        for (let char of instructions) {

            advance(char);
           
        }
        if (currPosition.x === 0 && currPosition.y === 0) {
            resetVars(); //to handle variable values whem multipe test cases/function calls made
            return true;
        }
    }
    resetVars();
    return false;


};
function resetVars() {
    currPosition = { x: 0, y: 0 };;
    currDir = 'N';
}
function advance(instruction: string): void {
    if (instruction === 'G') {
        switch (currDir) {
            case 'N':
                currPosition.y = currPosition.y + 1;
                break;
            case 'E':
                currPosition.x = currPosition.x + 1;
                break;
            case 'S':
                currPosition.y = currPosition.y - 1;
                break;
            case 'W':
                currPosition.x = currPosition.x - 1;
                break;

            default: break;
        }
    }
    else {
        currDir = legend[currDir][instruction];
    }
}

console.log(isRobotBounded('GL'));