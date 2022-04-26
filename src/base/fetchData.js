/**
 * 获取当前网站中的数据
 * @param {第几页} page 
 * @param {public中 global} target 
 */
function fetchData(page, target = 'global') {
    const controller = new AbortController();
    const fetchHandle = fetch(`/${target}/${page}_.json`, { signal: controller.signal }).then((response)=> response.json())
    
    const fetchAbort = ()=>{
        controller.abort();
    }

    return {
        fetchHandle,
        fetchAbort
    }    
}

export default fetchData;