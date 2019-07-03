import React from 'react'
import Person from './Person';

function NameList() {
    const names=['Bannu','Gani','BannuGani']
    const persons=[
        {
            id:1,
            name:"ganesh",
            age:25,
            skill:'react'
        },
        {
            id:2,
            name:"bannu",
            age:24,
            skill:'angular'
        },
        {
            id:3,
            name:'bannugani',
            age:49,
            skill:'react-angular'
        }
    ]
    const nameList= names.map(name=><h2>{name}</h2>)
    const personsList = persons.map((person,index)=> <Person key={index} person={person}/>)
    // return <div>{nameList}</div>
    return <div>{personsList}</div>
    
}

export default NameList
