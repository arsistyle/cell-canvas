import { useState } from 'react';
import { SketchPicker } from 'react-color';

export const ColorPicker = ({ options, handleOptions }) => {
  const [picker, showPicker] = useState(false);
  const handlePicker = () => {
    showPicker(!picker);
  };
  return (
    <div className='colorpicker'>
      <div
        className='colorpicker__item'
        style={{ backgroundColor: options.color }}
        onClick={handlePicker}
      ></div>
      {picker && (
        <>
          <div
            className='colorpicker__bg'
            onClick={() => handlePicker(false)}
          ></div>
          <div className='colorpicker__picker'>
            <SketchPicker
              color={options.color}
              onChangeComplete={({ hex }) =>
                handleOptions('color', hex)
              }
            />
          </div>
        </>
      )}
    </div>
  );
};
