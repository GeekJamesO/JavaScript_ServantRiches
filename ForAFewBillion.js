var daysRate = 0.01;
var sum = 0;
console.log("There is an old tale about a king who offered a servant $10,000 as a reward.");
console.log("The servant instead asked that for 30 days he be given an amount that would double, starting with a penny.");
for (var i = 0; i < 30; i++)
{
    sum = sum + daysRate;
    daysRate *= 2;
}
console.log("After thirty days, the servant would make $ " + sum);


function HowLongToMakeThisMuch( input )
{
  daysRate = 0.01;
  sum = 0;
  for (dayCounter = 1; dayCounter <= Infinity; dayCounter++)
  {
    sum = sum + daysRate;
    daysRate *= 2;
    if (sum >= input)
    {
      break;
    }
  }
  console.log("The Servant would received more than $" + input + " after " + dayCounter + " days.");
}


HowLongToMakeThisMuch(10000);  // 10 thousand.

HowLongToMakeThisMuch(1000 * 1000 * 1000);  // 1 billion

HowLongToMakeThisMuch(Infinity);

console.log("Where infinity is 1.7976931348623157E+10308" );
