import React, { useEffect, useState } from 'react';
import fetchApi from '../../base/fetchData'
import './index.css';

interface GlobalProps {
  hs_Rank_Global_Wealth: string;
  hs_Rank_Global_Ranking: number;
  hs_Rank_Global_ID: string;
}

const RankRow: React.FC<any> = ({item}) => {
  const [ceoInfo] = item.hs_Character;
  return <dd className='rank-row'><span>{item.hs_Rank_Global_Ranking}</span>
  <span>￥{ item.hs_Rank_Global_Wealth }亿</span>
  <span>{item.hs_Rank_Global_ComName_Cn}</span>
  <span>{item.hs_Rank_Global_Industry_Cn}</span>
  <span>{ceoInfo.hs_Character_Fullname_Cn}_{ ceoInfo.hs_Character_Gender_Lang}</span>
  <span>{ ceoInfo.hs_Character_Age}</span>
  </dd>
};

function App() {
  const [page, setPage] = useState(1)
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {    
    const { fetchHandle } = fetchApi(1,"global")
    fetchHandle.then(({rows=[]}) =>{
      setFetchData(rows)
    })
  },[]);
  const rows = fetchData.map((item:GlobalProps) => {
    return <RankRow item={item} key={item.hs_Rank_Global_ID}/>
  })
  return (
    <dl>
      <dt className='rank-row'><span>排名</span><span>市值</span><span>公司名</span>
      <span>行业</span><span>董事</span><span>年龄</span></dt>
      {rows}
    </dl>
  );
}

export default App;
