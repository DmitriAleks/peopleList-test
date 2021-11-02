import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  background: linear-gradient(#4394e0, #307bbf 48%, #276faf 52%, #1f65a1);
  box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset, .1em .1em .2em #001288;;
`;
const Link = styled.a`
  text-decoration: none;
  padding: 10px;
  font-size: larger;
  color: #fff;
`;


const Header = () => {
    return (<Wrapper>
        <Link href="/">Главная</Link>
        <Link href="/employees">Сотрудники</Link>
    </Wrapper>)
}
export default Header