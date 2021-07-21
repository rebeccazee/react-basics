import React from 'react';

function Item(props) {
    const { item } = props;
    const [bg, setBg] = React.useState('');

    const handleMouseOver = () => {
        setBg('red');
    }
    const handleMouseOut = () => {
        setBg('');
    }

    return (
        <p 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            style={{backgroundColor: bg}}
        >
            {item}
        </p>
    );
}

export default Item;
