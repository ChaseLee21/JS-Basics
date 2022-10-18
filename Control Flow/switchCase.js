//compare value of variables to other values
//executes code based off comparison

let role = 'Guest';

switch (role) {
    case 'Guest': 
        console.log("Guest User");
        break;
    case 'Moderator':
        console.log("Moderator User");
        break;
    default:
        console.log("Unknown User");
}