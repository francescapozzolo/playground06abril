import React from 'react' 

const Header = ({tit, valor}) => {  

    return (
        <header>
            <h1>{tit} tiene el valor {valor}</h1>
        </header>
    )
}

export default Header