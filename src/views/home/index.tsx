import React, { useEffect, useState } from 'react';
import fetchApi from '../../base/fetchData';
//接口是文件，所以会缓存
import getAllData from '../../base/searchData';
import './index.css';
import RankRow from '../../components/RankRow/index';
import RankHead from '../../components/RankHead/index';
import { filterRows } from './filter';
interface GlobalProps {
  hs_Rank_Global_Wealth: string;
  hs_Rank_Global_Ranking: number;
  hs_Rank_Global_ID: string;
}


function App() {
  let [fetchData, setFetchData] = useState([])

  useEffect(() => {
    getAllData().then(data => {
      setFetchData(data.map((item: any) => item.rows).reduce((a: string | any[], b: any) => {
        return a.concat(b)
      }, []))
    })
  }, []);

  //进行搜索
  const wrapClick = (e: any) => {
    const customValue = e.customValue;
    if (customValue) {
      const { inputEl, inputE2 } = customValue.searchValue;
      getAllData().then(data => {
        let filterData = [];
        switch (customValue.searchType) {
          case "age": {
            filterData = data.map((item: any) => {
              return filterRows(item.rows, {
                leftVal: parseInt(inputEl),
                rightVal: parseInt(inputE2),
                arg: ["hs_Character", 0, "hs_Character_Age"] as any
              })
            }).reduce((a: any[], b: any[]) => { return a.concat(b) }, [])

            break;
          }
        }
        setFetchData(filterData)
      })
    }
  }

  const rows = fetchData.map((item: GlobalProps, index) => {
    return <RankRow item={item} key={index} />
  })

  return (
    <dl onClick={wrapClick}>
      <RankHead />
      {rows}
    </dl>
  );
}

export default App;
