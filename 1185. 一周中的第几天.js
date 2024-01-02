/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let myDate = new Date();
    myDate.setFullYear(year,month-1,day);
    ans = myDate.getDay();
    //console.log(weekday[ans]);
    return 0;
    //getDay() 函数会返回一个整数0~6，对应星期日到星期六
};
