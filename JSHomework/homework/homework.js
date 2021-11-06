function isAsal(...numbers) {

    let counter = 0;

        for (let i= 0; i < numbers.length; i++) {

           if ((numbers[i] == 0)|| (numbers[i] ==1) || (numbers[i]<0)){
            
                 continue
    
           } 
           else{
    
               for(let j=2; j < numbers[i]; j++ ) {
                   if (numbers[i] % j == 0 ){
    
                       counter = 1;
    
                       break;
                   }
               }
    
               if(counter == 0) {
                   //console.log(numbers[i] + " is prime number ")
               }
    
               else {
                   continue
               }
    
               counter = 0
           }
    
        }
    }
    isAsal(10,-5,10,75,4,1,11,2,13,101,8)

    // ******************* Arkadaş Sayılar ***********************

function findFriendNumber(number1,number2) {

        let sum1 = 0
        let sum2 = 0
        
        for(let i =1; i<number1; i++){
            if(number1 %i == 0){
                sum1 =sum1+i
            }
        }
        for (let j = 1; j<number2; j++){
            if(number2 % j ==0){
                sum2 = sum2+j
            }
        }
            
        if(number1 ==sum2 && number2== sum1){
            console.log(number1  + " and " + number2 + " Arkadaş sayılardır." )
        }
        else{
            console.log( number1  +   " ve "  +   number2 + " Arkadaş sayı değildir. ")
        }
        
        
        }
        findFriendNumber(220, 284)
        findFriendNumber(1685,8562)

        // ******** Mükemmel sayılar *********

function  findPerfectNumber(number) {

    for (let i= 1; i < number; i++) {
        let sum3 = 0

        for(let j = 1; j < i; j++){
            if(i % j === 0){
                sum3=sum3+j;
            }
        }
        if(i == sum3){
            console.log(i + " is perfect number.")
        }
    }   
}
findPerfectNumber(6)

// ******* 1000 e kadar asal ******
function primeNumbers() {
    let count=0
    for (let i = 2; i < 1000; i++) {
        for (let j = 1; j<= i; j++) {
            if (i%j == 0) {
                count++
            }
        }
        if (count == 2) {
            console.log(i +" Asal sayıdır.")
            count=0
        }
       else{
           count=0
       }   
    }
  }
  primeNumbers()


