import logo from './logo.svg';
// import './App.css';
import './main.scss';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MainVisual } from './MainVisual';
import TopBanner from './TopBanner';

function Text() {
  return (
    <figure>
      lorem
    </figure>
  )
}

const Tcon01 = () => <div>한쿸 멋저연</div>
const Tcon02 = () => <div>이웃나라 외쿸인</div>
const Tcon03 = () => <div>건너나라 와르르</div>

function Tab() {
  const [tab, setCon] = useState(<Tcon01 />);
  return (
    <div className='wrap'>
      <ul className='menu'>
        <li onClick={() => setCon(<Tcon01 />)}>menu01</li>
        <li onClick={() => setCon(<Tcon02 />)}>menu02</li>
        <li onClick={() => setCon(<Tcon03 />)}>menu03</li>
      </ul>
      <div>{tab}</div>
    </div>
  )
}

function Tab02() {
  const MENU = [<Tcon01 />, <Tcon02 />, <Tcon03 />];
  const [num, setNum] = useState(0);
  // map() 배열 메소드 : 배열을 순회하면서 새로운 배열을 만든다.
  return (
    <div className='wrap'>
      <ul className='menu'>
        {
          MENU.map(function (el, idx) {
            return <li onClick={() => setNum(idx)}>menu0{idx + 1}</li>
          })
        }
      </ul>
      MENU[num]
    </div>
  )
}

const Sty = styled.div`
background: tomato;
color: #fff;
height: 100px;
`

function App() {
  const [on, setOn] = useState('false');
  // 조건부 랜더링

  return (
    <>
      <TopBanner />
      <MainVisual />
      <div className={`na ${on ? 'on' : ''}`} onClick={() => setOn(!on)}>
        <span>홈피</span>
        {
          on ? <Text /> : null
        }
      </div >
      <Tab02 />
      <Tab />
      <Sty />
    </>
  );
}


// const Na - document.querySelector('.na')
// Na.addEvntListener('click', function(){
//   this.classList.toggle('on')
// })

export default App;
