import React from 'react'

type PersonListProps = {
    names: {
        id: number
        first: string
        last: string
    }[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
        <h2>
            {
                props.names.map(name => {
                    return(
                        <h2> key={name.id}
                            {name.first} {name.last}
                        </h2>
                    )
                })
            }
        </h2>
        
    </div>
  )
}

export default PersonList