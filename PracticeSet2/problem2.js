let age  = prompt("Enter the Age");
 switch (age) {
    case '18':
        console.log("You can aligible for vote");   
        break;
    case '17':
        console.log("You can't aligible for vote");   
        break;
 
    default:
        console.log("Please enter a valid age");
        break;
 }