import { useState, memo, useEffect } from 'react';

export function Shape(props) {
  const [type, setType] = useState();
  const [fragment, setFragment] = useState(null);
  const [version, setVersion] = useState(null);
  const [color, setColor] = useState('var(--scheme-color)');

  const [options, setOptions] = useState({
    type,
    fragment,
    version,
    color
  });

  const handleColor = (event) => {
    setOptions({ ...options, color: props.color });
  };

  return (
    <div
      className='shape'
      data-type={options.type}
      data-fragment={options.fragment}
      data-version={options.version}
      style={{
        backgroundColor: options.color,
        outline: `${props.border ? 1 : 0}px solid #000`,
        width: props.width,
        height: props.height
      }}
      onClick={handleColor}
    ></div>
  );
}

export default Shape = memo(Shape);
