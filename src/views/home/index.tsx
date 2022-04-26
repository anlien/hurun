import React, { useEffect, useState } from 'react';
import fetchApi from '../../base/fetchData'
interface globalProps {
  hs_Rank_Global_Wealth: string;
}

function App() {
  const [page, setPage] = useState(1)
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {    
    const { fetchHandle } = fetchApi(1,"global")
    fetchHandle.then(({rows=[]}) =>{
      console.log(rows)
      setFetchData(rows)
    })
  },[]);
  
  const DataUI = fetchData.map((item:globalProps) => {
    return <div>{item.hs_Rank_Global_Wealth}</div>
  })
  return (
    <div className="App">{DataUI}
    </div>
  );
}

export default App;
