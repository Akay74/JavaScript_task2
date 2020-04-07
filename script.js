var data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}
];

function interestCalculator(aob) {
    //aob means array of objects
    var interestData = [];
    var i, item;
    for (i=0; i<aob.length; i++) {
        for(item in aob[i]) {
            var principal = aob[i].principal;
            var time = aob[i].time;
            var rate = 0;  
            if (principal >= 2500 && time > 1 && time < 3) {
                rate = 3;
            }  else if (principal >= 2500 && time >= 3) {
                rate = 4;
            } else if (principal < 2500 || time >= 1) {
                rate = 2;
            } else {
                rate = 1;
            }
            var interest = (principal * rate * time)/100;
        }
        var indObj = {};
        //indObj stands for individualObject
        indObj.principal = principal;
        indObj.time = time;
        indObj.rate = rate;
        indObj.interest = interest;
        interestData.push(indObj);
        }
        console.log(interestData);
        return interestData;
    }
    interestCalculator(data);

