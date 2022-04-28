import React, { useState, useRef } from 'react';
import './index.css';

const Search = (props: any) => {
  const inputEl: any = useRef(null);
  const inputE2: any = useRef(null);

  const onSearchClickFn = (e: any) => {
    e.customValue = {
      action: "search",
      searchType: props.searchType,
      searchValue: {
        inputEl: inputEl.current.value,
        inputE2: inputE2.current.value
      }
    }
  };

  return <div className='search-wrap'>
    <div className='search-item'>
      <input type="text" className="input-txt" autoComplete="off" ref={inputEl} />
      ~
      <input type="text" className="input-txt" autoComplete="off" ref={inputE2} />
    </div>
    <div className='search-item'>
      <label className='search-btn-clear'>清除</label>
      <label className='search-btn ant-btn-lg search-btn-confirm' onClick={onSearchClickFn}>搜索</label>
    </div>
  </div>
}

const SearchText = (props: any) => {
  const inputEl: any = useRef(null);

  const onSearchClickFn = (e: any) => {
    e.customValue = {
      action: "search",
      searchType: props.searchType,
      parameter: props.parameter,
      searchValue: {
        inputEl: inputEl.current.value,
      }
    }
  };
  return <div className='search-text-wrap'>
    <input type="text" className="input-txt" autoComplete="off" ref={inputEl} />
    <label className='search-btn ant-btn-lg search-btn-confirm' onClick={onSearchClickFn}>搜索</label>
  </div>
}

const SearchIcon = () => {
  return <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
}

const CloseIcon = () => {
  return <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
}

const AgeItem = () => {
  const [ageSearch, setSearch] = useState(false)
  return <div className='rank-td'><span style={{ position: 'relative' }}
    onClick={() => { setSearch(!ageSearch) }}>
    年龄 {ageSearch ? <CloseIcon /> : <SearchIcon />}</span>
    <br />{
      ageSearch ? <Search searchType='age' /> : null
    }</div>
}

const IndustryItem = (props: any) => {
  const [status, setSearch] = useState(false)
  return <div className='rank-td'><span style={{ position: 'relative' }}
    onClick={() => { setSearch(!status) }}>
    {props.text} {status ? <CloseIcon /> : <SearchIcon />}</span>
    <br />{
      status ? <SearchText searchType='searchWord' parameter={props.parameter} /> : null
    }</div>
}

const RankHead = () => {
  return <dt className='rank-row rank-title'>
    <span className='rank-td'>排名</span>
    <span className='rank-td'>市值</span>
    <IndustryItem text={"公司名"} parameter={['hs_Rank_Rich_ComName_Cn', 'hs_Rank_Global_ComName_Cn']} />
    <IndustryItem text={"行业"} parameter={['hs_Rank_Rich_Industry_Cn', 'hs_Rank_Global_Industry_Cn']} />
    <span className='rank-td'>董事</span>
    <AgeItem />
  </dt>
};

export default RankHead;