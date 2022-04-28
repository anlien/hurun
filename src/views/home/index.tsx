import React, { useEffect, useState, useContext } from 'react';
import fetchApi from '../../base/fetchData'
import './index.css';
import RankRow from '../../components/RankRow/index';
import RankHead from '../../components/RankHead/index';
interface GlobalProps {
  hs_Rank_Global_Wealth: string;
  hs_Rank_Global_Ranking: number;
  hs_Rank_Global_ID: string;
}


function App() {
  const [page, setPage] = useState(1)
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    const { fetchHandle } = fetchApi(1, "global")
    fetchHandle.then(({ rows = [] }) => {
      setFetchData(rows)
    })
  }, []);

  //进行搜索
  const wrapClick = (e: any) => {
    const customValue = e.customValue;
    if (customValue) {
      switch (customValue.searchType) {
        case "age": {
          const { inputEl, inputE2 } = customValue.searchValue;
          let filterData: React.SetStateAction<never[]> = fetchData;
          if (inputEl) {
            const numEl = parseInt(inputEl);
            filterData = filterData.filter((item: any) => {
              const [charaItem] = item.hs_Character;
              if (charaItem.hs_Character_Age == '未知') return false;
              return charaItem.hs_Character_Age >= numEl;
            })

          }
          if (inputE2) {
            filterData = filterData.filter((item: any) => {
              const numE2 = parseInt(inputE2);
              const [charaItem] = item.hs_Character;
              if (charaItem.hs_Character_Age == '未知') return false;
              return charaItem.hs_Character_Age <= numE2;
            })
          }
          setFetchData(filterData)
          break;
        }
      }
    }
  }
  
  const rows = fetchData.map((item: GlobalProps) => {
    return <RankRow item={item} key={item.hs_Rank_Global_ID} />
  })
  return (
    <dl onClick={wrapClick}>
      <RankHead />
      {rows}
    </dl>
  );
}

export default App;
