import React, { useState } from 'react';

function Item(props) {
  const { item } = props;
  const [bg, setBg] = useState(0);

  return (
    <p
      onMouseOver={() => setBg('red')}
      onMouseOut={() => setBg('')}
      style={{ backgroundColor: bg }}
    >
      {item}
    </p>
  );
}

export default Item;
