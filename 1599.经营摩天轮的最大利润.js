var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
    let max_profit = 0;
    let min_cnt = -1;
    let cnt = 0; // 初始化轮数为0  
    let arrived, temp, current_profit;
    let wait = 0; // 初始化等待的游客数为0  
    let onboard = 0; // 初始化在游乐设施上的游客数为0  

    for (let i = 0; i < customers.length; i++) {
        cnt++; // 更新轮数   
        arrived = customers[i];
        if (arrived + wait <= 4) {
            temp = arrived + wait;
            wait = 0; // 清零等待的游客数  
        } else {
            temp = 4; // 最多只能有4位游客登上游乐设施  
            wait += arrived - 4; // 更新等待的游客数  
        }
        onboard += temp; // 更新在游乐设施上的游客数  
        current_profit = onboard * boardingCost - cnt * runningCost; // 计算当前利润  
        console.log(`${arrived}位游客抵达,${temp}位登舱,${wait}位等待.摩天轮第${cnt}次轮转,当前利润:${current_profit}`); // 打印日志消息  
        if (current_profit > max_profit) {
            max_profit = current_profit;
            min_cnt = cnt;
        }
    }
    while (wait > 0) {
        cnt++; // 更新轮数  
        if (wait > 4) {
            temp = 4; // 最多只能有4位游客登上游乐设施  
            wait -= 4; // 更新等待的游客数  
        } else {
            temp = wait; // 所有等待的游客都登上游乐设施  
            wait = 0; // 清零等待的游客数  
        }
        onboard += temp; // 更新在游乐设施上的游客数  
        current_profit = onboard * boardingCost - cnt * runningCost; // 计算当前利润  
        console.log(`已不再有游客抵达,${temp}位登舱,${wait}位等待.摩天轮第${cnt}次轮转,当前利润:${current_profit}`); // 打印日志消息  
        if (current_profit > max_profit) {
            max_profit = current_profit;
            min_cnt = cnt;
        }
    }
    return min_cnt; // 返回最小转数以获得最大利润  
};
