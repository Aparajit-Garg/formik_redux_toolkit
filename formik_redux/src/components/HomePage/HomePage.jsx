import React, { useEffect } from 'react'

const HomePage = () => {
    
    useEffect(() => {
        document.getElementById("searchText").disabled = true;
    })

    return (
    <div>
        <h1>Hello</h1>
    </div>
    )
}

export default HomePage
