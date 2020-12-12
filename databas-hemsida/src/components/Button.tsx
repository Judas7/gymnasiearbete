import React from 'react';

export const Button = () => {
    return (
        <button onClick={getData}>
            Klicka på mig!
        </button>
    )
}

const getData = async () => {
    const result = await fetch('http://localhost:3001/strings')
    const data = await result.json()
    console.log(data)
}

