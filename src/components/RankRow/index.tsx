import React from 'react';
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

export default RankRow;