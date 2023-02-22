import React, { useState } from 'react';
import { Tcon01, Tcon02, Tcon03 } from './App';

function Tab02() {
    const MENU = [<Tcon01 />, <Tcon02 />, <Tcon03 />];
    const [num, setNum] = useState(0);
    // map() 배열 메소드 : 배열을 순회하면서 새로운 배열을 만든다.
    return (
        <div className='wrap'>
            <ul className='menu'>
                {MENU.map(function (el, idx) {
                    return <li onClick={() => setNum(1)}>menu0{idx + 1}</li>;
                })}
            </ul>
            MENU[num]
        </div>
    );
}
