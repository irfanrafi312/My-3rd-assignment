

// 1.
function kilometerToMeter (kilometer) 
{
        var result = kilometer*1000;
        return result;    
}
console.log(kilometerToMeter(5));


// 2.
function budgetCalculator (watch,mobile,laptop) 
{
        var result = (watch*50)+(mobile*100)+(laptop*500)
        return result;
}
console.log(budgetCalculator(10,10,10));


// 3.
function hotelCost (numberOfDays) 
{
    var result = 0; 
    if (numberOfDays <= 10) 
    {
       result = numberOfDays*100;
       return result;
    } 
    else if (numberOfDays <= 20) 
    {
        var first10Days = 10*100;
        result = first10Days+((numberOfDays-10)*80);
        return result;
    }
    else 
    {
        var first20Days = (10*100)+(10*80);
        result =  first20Days+((numberOfDays-20)*50);
        return result;
    }
}
console.log(hotelCost(10));
console.log(hotelCost(20));
console.log(hotelCost(30));


// 4.
function megaFriend (friendsName) 
{
    var longestName = " ";
    for (let i = 0; i < friendsName.length; i++) 
    {
        if (friendsName[i].length > longestName.length) 
        {
            longestName = friendsName[i];
        }        
    }   
    return longestName;
}
console.log(megaFriend(["salman", "rafi", "rahat", "nadim"]));