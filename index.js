var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


//Declaring variables for analysis

let months = finances.length;
let total = 0;
let change = 0;
let average;
let analysis;
let net = 0;
let netArray = [];
let netChangeSum = 0;
// least min
// greatest max
// least = [];
// greatest = [];

for(let index = 0; index < finances.length; index++){
  for(let index2 = 0; index2 < finances[index].length; index2++){
    
    if(typeof finances[index][index2] !=='string') {
      total += finances[index][index2];
      change = finances[index][index2] - net;
      net = finances[index][index2];
      netArray.push(change);
      // console.log(`total: ${total}`);
      // console.log(`change: ${change}`);
      // console.log(`net: ${net}`);
      // console.log(`netArray ${netArray}`);
    }
  }
}

for (let index = 0; index < netArray.length; index++){
  netChangeSum = netChangeSum + netArray[index];
}

average = Math.round((netChangeSum / 86) *100) /100;

analysis = `Financial Analysis` + `\n` +
`-----------------------------` + `\n`+
`Total Months ` + months + `\n` +
``



// var average;
// var analysis;
// var months = finances.length;
// var total = 0;
// var change = 0;
// var net = 0;
// var netArray = [];
// var netChangeSum = 0;
// var least = ['', 9999999999]; //Initialising least to a high value
// var greatest = ['', 0]; //Initialising greatest to a low value


// Loop through each financial record

// 'i' represents each financial record or row in the dataset
// 'j' represents the elements within each financial record (i.e., the date of profit/loss value).
// for (var i= 0; i < finances.length; i++) {
//   for (var j = 0; j < finances [i].length; j++) {
//     //Checking if the value is not a string (assuming numbers are the Profit/Losses)
//   if (typeof finances [i][j] !== 'string') {
//     total += finances [i][j]; // Calculating total profit/loss
//     change = finances [i][j] - net; //Calculating change from previous month
//     net = finances [i][j]; //Updating net to current month's profit/loss
//     netArray.push(change); // Storing changes for calculating average

//     // Finding greatest increase in profit/loss
//     if (change > greatest [1]) {
//       greatest = [finances [i][0], finances [i][1]] //Updating greatest array
//     }
//     //Finding greatest decrease
//   if (change < least [1]) {
//     least = [finances[i][0], finances [i][1]]; //Updating least array
//   }
//console.log('total: ${total}');
//console.log('change: ${change}');
//console.log('net: ${net}');
//console.log('netArray: ${netArray}');
//}
// }
// }
// }

// //Calculating net change sum for calculating average
// for (var i = 0; i < netArray.length; i++) {
//   netChangeSum += netArray [i];
// }

// // Calculating average change 
// average = Math.round((netChangeSum / (months - 1)) * 100) / 100;
// // This line calculates the average change and then divides by 100 to round to the nearest 100th.
// // The reason for using (month-1) in the denominator is that
// // I am calculating the average change based on the changes between months.
// // If I have 'n' months in the future, thare are n - 1 changes between them.
// // So, (month - 1) provides the correct denominator for the average calculation.
// // This approach is more flexible and accurate if the number of months changes in different datasets.

// // or

// // another formula // To calculate tha average change and round to the nearest hundredth
// // average = (netChangeSum / (month - 1)).toFixed(2);


// // Preparing analysis report
// // String concatenation to combine strings and variables in my analysis report 
// analysis = 
//   'Financial Analysis'+'\n'+
// '--------------------'+'\n'+
// 'Total Months: ' + months + '\n'+
// 'Total: $' + total +'\n'+
// 'Average Change:'+average + '\n'+
// 'Greatest Increase in Profits/Losses: '+greatest[0] + ' ($' + greatest[1]+ ')'+ '\n'+
// 'Greatest Decrease in Profits/Losses: '+least[0]+'($' + least[1]+')' + '\n';

// // Alternate simplified string literal as suggested by mentor

// // analysis = 
// //  'Financial Analysis
// // --------------------
// // Total Months: ${months}
// // Total: $ ${total}
// // Average Change: ${average}
// // Greatest Increase in Profit: ${greatest(0)}: $${greatest[1]}
// // Greatest Decrease in Profit: ${least[0]}: $${least[1]}'


// // Displaying analysis report in console
// console.log(analysis);

