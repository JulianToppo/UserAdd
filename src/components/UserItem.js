import React from 'react'

export default function UserItem(props) {
  return (
    <div>
        
             <ul key={Math.random()}>{`${props.username} (${props.age} years old)`}</ul>
        
     
    </div>
  )
}
