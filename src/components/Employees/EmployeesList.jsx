import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import Employee from "./Employee";



const AddedEmployeeForm = styled.input`
  margin-top: 10px;
  padding: .3em 1em;
  border-radius: 3px;
`;

const List = styled.ul`
  font-size: medium;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;
const Btn = styled.button`
  color: rgb(245, 245, 245);
  text-shadow: 0 -1px rgba(0, 0, 0, .1);
  padding: .3em 1em;
  border-radius: 3px;
  background: #0c9c0d linear-gradient(#82d18d, #0c9c0d);
  box-shadow: inset #72de26 0 -1px 1px, inset 0 1px 1px #98ff98, #3caa3c 0 0 0 1px, rgba(0, 0, 0, .3) 0 2px 5px;
`;


const EmployeesList = () => {
    const [state, setState] = useState([])
    const [title, setTitle] = useState('')
    const removeEmployee = (id) => {
        let a = state.filter(el => el.id != id)
        setState(a)
    }
    const addNewEmployee = (name) => {
        if (name === '') {
            return
        }
        const people = {
            id: Math.random(),
            email: "george.bluth@reqres.in",
            first_name: name,
            last_name: "Bluth",
            avatar: "https://reqres.in/img/faces/1-image.jpg",
        }
        const newState = [...state, people]
        setState(newState)
        setTitle('')
        console.log(title)
    }
    const changeValue = (e) => {
        setTitle(e.currentTarget.value)
    }


    useEffect(() => {
        axios.get('https://reqres.in/api/users?per_page=12')
            .then((res) => {
                setState(res.data.data)
            })
    }, [])

    return (
        <div>
            <div>
                <AddedEmployeeForm type="text" value={title} onChange={changeValue}/>
                <Btn onClick={() => {
                    addNewEmployee(title)
                }}>add people
                </Btn>
            </div>
            <List> Список сотрудников
                {
                    state.map((el) => {
                        return (<Employee id={el.id} {...el} removeEmployee={removeEmployee}/>)
                    })
                }
            </List>
        </div>
    )
}
export default EmployeesList

