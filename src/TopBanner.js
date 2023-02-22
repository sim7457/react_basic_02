import styled from "styled-components";
import { BsFillCapslockFill } from "react-icons/bs";
import { useState } from "react";

const Wrap = styled.div`
    position: sticky;
    top:0;
    background: #803366;
    height: 100px;
    overflow: hidden;
    transition: 0.5s;
    color: #fff;
    &.on {
        height: 0;
    }

    .big {
        position: absolute;
        bottom: 20px;
        left: 50%;
        margin: 0 0 0 600px;
        transform: translate(-100%,0);
        font-size:50px;
    }
`

const TopBanner = () => {
    const [on, setOn] = useState(false)
    return (
        <Wrap className={on && 'on'}>
            asdfdasfdfdsf
            <BsFillCapslockFill onClick={() => setOn(true)} className="big" />
        </Wrap>
    )
}

export default TopBanner;