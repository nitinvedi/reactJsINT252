import React from 'react'

export default function UserCard({Username, Email, Country}) {
  return (
    <div>
      <h2>{Username}</h2>
      <p>{Email}</p>
      <p>{Country}</p>
    </div>
  )
}
