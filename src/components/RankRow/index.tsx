import React from 'react';
const RankRow: React.FC<any> = ({ item, rank }) => {
  const [ceoInfo] = item.hs_Character;
  return <dd className='rank-row'><span className='rank-td'>{rank}</span>
    <span className='rank-td'>￥{item.hs_Rank_Global_Wealth || item.hs_Rank_Rich_Wealth}亿</span>
    <span className='rank-td'>{item.hs_Rank_Global_ComName_Cn || item.hs_Rank_Rich_ComName_Cn}</span>
    <span className='rank-td'>{item.hs_Rank_Global_Industry_Cn || item.hs_Rank_Rich_Industry_Cn}</span>
    <span className='rank-td'>{ceoInfo.hs_Character_Fullname_Cn}_{ceoInfo.hs_Character_Gender_Lang}</span>
    <span className='rank-td'>{ceoInfo.hs_Character_Age}</span>
  </dd>
};

export default RankRow;
