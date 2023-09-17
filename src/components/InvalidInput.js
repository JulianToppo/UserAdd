import React from 'react'

export default function InvalidInput(props) {
   
  return (
    <div>
      <h1>Invalid Input</h1>
      <p>{(props.ageFilter && props.ageFilter<0)?'Please enter a valid age(age<0)':'Please enter a valid name and age(non-empty-values)'}</p>
    </div>
  )
}
