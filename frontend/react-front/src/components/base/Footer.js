import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <React.Fragment>
            <Foot>Footer Section</Foot>
        </React.Fragment>
    )
}

const Foot = styled.div`
    display: inline-block;
    width: 100vw;
    background-color: aqua;
    height: 100px;
`;

export default Footer;