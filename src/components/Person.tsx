import React from 'react'

type PersonProps = {
    name: {
        first: string
        last: string
        age: number 
    }
}

const Person = (props: PersonProps) => {
    const {first, last, age} = props.name;
    return (
        <div>
            <h2>Name: {first}{last}</h2>
            <h2>Age: {age}</h2>
        </div>
    )
}

export default Person