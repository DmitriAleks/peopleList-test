import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  padding: 2px;
  justify-content: space-between;
  width: 150px;
`;
const Btn = styled.button`
  margin-left: 10px;
  width: 5em;
  height: 2.5em;
  text-align: center;
  text-shadow: 0 -1px 1px #777;
  color: #fff;
  border: 2px solid #F64C2B;
  border-radius: 5px;
  box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset, .1em .1em .2em #800;
  background: linear-gradient(#FB9575, #F45A38 48%, #EA1502 52%, #F02F17);
`;


const Employee = (props) => {
    return (<Wrapper>
        <li>{props.first_name}</li>
        <Btn id={props.id} onClick={() => {
            props.removeEmployee(props.id)
        }}>Delete
        </Btn>
    </Wrapper>)
}
export default Employee