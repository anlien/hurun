//
export function filterRows(data=[], condition={ leftVal: 0, rightVal: 0, arg: [] }){
    //区间--左边值
    const leftVal = condition.leftVal;
    //区间--右边值
    const rightVal = condition.rightVal;
    //过滤数组
    return data.filter(item => {
        const val = condition.arg.reduce((a,b) => a[b], item)
        let filVal = true;
        if(leftVal){
            filVal =  val>= leftVal
        }
        if(rightVal){
            filVal =  val <= rightVal
        }
        return filVal;
    })
}