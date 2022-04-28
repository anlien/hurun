import fetchData from './fetchData';
const dataTarget = {
    global: 17,
    china2021: 15
}
const cacheData = {}
/**
 * 搜索全部数据
 * @param {第几页} page 
 * @param {public中 global} target 
 */
 function getAllData() {
    let target="global";
    const pathname = window.location.pathname;
    if(pathname.indexOf("china2021") !== -1) target = 'china2021';
    if(cacheData[target]) return Promise.resolve(cacheData[target]);
    let promiseArr = []
    const pageCount = dataTarget[target]
    for(let i=1; i<= pageCount; i++){
        const { fetchHandle } = fetchData(i, target)
        promiseArr.push(fetchHandle)
    }
    return Promise.all(promiseArr).then((data)=>{
        cacheData[target] = data;
        return data;
    })
}

export default getAllData;