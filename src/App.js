
import logo from './logo.svg';
import './App.css';
import {useState}from'react';
import React from 'react';
import downArrow from './img/icon_arrow_Down.svg';
import downArrowcopy from './img/icon_arrow_Down_copy.svg';

function PointTable(){
  return(
    <div id="grid">
    <div className="a bold-16px">현재 보유 포인트
    <div className=" thin-16px top-4px">23,402P</div>
    </div>
    <div className="b bold-16px">거래 후 잔액
    <div className="d thin-16px top-4px">15,402P</div>
    </div>
  </div>
  )
}

function UsageTable(){
  return(
  <div>
    <div className="top-7px">
    </div>
    <table className="usage-table">
      <tr><th>상업적 용도</th><th>이용가능</th></tr>
      <tr><td className="td">특허출원</td><td className="td-available">불가능</td></tr>
    </table>
    </div>
  )
}


function UsageRangeToggle(){

  const [visible,setVisible]=useState(false);
  return(
    <div className="gray-border-bottom padding-bottom-18px">

  <div id="grid-1fr-1fr" className="bold-20px top-14px ">
      이용 가능 범위
      <button className="down-button text-align-right"
        onClick={()=>{
          setVisible(!visible);
        }}
        >
          {visible?<img src={downArrow}></img>:<img src={downArrowcopy}></img>}
        </button>
        </div>
        {visible&&<Myinfo/>}
    </div>
  )
      }



const Myinfo=()=>{
  return(
    <>
    <div id="grid-1fr-1fr">
    <div className="text-align-left thin-16px top-7px">상업적 용도
    </div>
    <div className="text-align-right thin-16px">이용 가능
    </div>
  </div>
  <div className="margin-top-8px"></div>
  <div id="grid-1fr-1fr" >
  <div className="text-align-left thin-16px">특허 출원
  </div>
  <div className="text-align-right nope">불가능
  </div>
  </div>
  </>
    )
}


function App() {
  const title=['포인트 충전하기', '구매하기']
  const terms='번뜩은 회원 상호 간 콘텐츠 거래를 위한 중개 시스템을 제공할 뿐,\n회원을 대리하지 않습니다. 환급, 취소 등 회원 간 성립된 거래에 대한\n모든 책임은 회원이 직접 부담합니다.\n자세한 내용은 '
//post:변수
  let 참조해주세요='을 참고해 주세요.'



  return (
    <div className="App">
      <title >payment</title>
      <div className="buy-nav">
        구매하기
      </div>
      <div className="border-bottom"></div>
      <div className="title-nav">
        [친환경/에코프렌들리] 꼬막 요리계의 혁명적 아이디어
      </div>
      <div className="idea-price-title">
        아이디어 가격
      </div>
      <div className="idea-price">
        8,000P
      </div>
    <PointTable></PointTable>
    <div className="top-11px">
    <button className='point-button'>{title[0]}</button>
    </div>
    <div className="gray-box"></div>
    <div className="bottom-25px"></div>
    <UsageRangeToggle></UsageRangeToggle>
    <div className="display-enter terms">{terms}<span className="blue-text">이용약관</span>{참조해주세요}</div>
    <button className='buy-button'>{title[1]}</button>
    <div className="gray-box-bottom"></div>
    </div>
  );
}

export default App;
