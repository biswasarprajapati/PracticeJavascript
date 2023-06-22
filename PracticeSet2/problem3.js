let num = prompt("Enter the number");
num = Number.parseInt(num)
if (num%2==0 && num%3==0) {
    console.log("This number is divisible by both 2 and 3");
}
else{
    console.log("This number is not divisible by both 2 and 3");
}