
for(var count = 1; count<101; count++){
    if(count % 3 == 0 && count % 5 == 0){
        console.log('FizzBuzz'); //for each number that is a multiple of 3 and 5
    }
    else if(count % 3 == 0){
        console.log('Fizz'); //for each number that is a multiple of 3
    }
    else if(count % 5 == 0){
        console.log('Buzz'); //for each number that is a multiple of 5
    }
    else{
        console.log(count); //prints numbers that do not otherwise fulfil the above conditions
    }
}

//another way to do it
// var count = 1;
// while(count < 101){
//     if(count % 3 == 0 && count % 5 == 0){
//         console.log('FizzBuzz');
//     }
//     else if(count % 3 == 0){
//         console.log('Fizz');
//     }
//     else if(count % 5 == 0){
//         console.log('Buzz');
//     }
//     else{
//         console.log(count);
//     }
//     count++;
// }
