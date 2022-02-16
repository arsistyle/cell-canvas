import { Input, Spacer, Switch } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import Shape from '../Shapes';
import { Cell } from './Cell';
import { ColorPicker } from './ColorPicker';

export const Canvas = (props) => {
  const [options, setOptions] = useState({
    rows: 10,
    columns: 10,
    color: '#FFFF00',
    border: true,
    width: 20,
    height: 20,
    ...props?.options
  });

  const [rows, setRows] = useState(
    Array(options.rows).fill('row')
  );
  const [columns, setColumns] = useState(
    Array(options.columns).fill('column')
  );

  const handleOptions = (option, value) => {
    setOptions({
      ...options,
      [option]: value
    });
  };


  useEffect(() => {
    setRows(Array(options.rows).fill('row'));
    setColumns(Array(options.columns).fill('column'));
  }, [options.columns, options.rows]);

  return (
    <div className='canvas'>
      <header className='canvas__options'>
        <h4>Grid Options</h4>
        <div className='canvas__options__item'>
          <Input
            type='number'
            label='Rows'
            initialValue={options.rows}
            onChange={({ target }) =>
              handleOptions('rows', target.valueAsNumber)
            }
            width={60}
            max={50}
            min={1}
          />
        </div>
        <div className='canvas__options__item'>
          <Input
            type='number'
            label='Columns'
            initialValue={options.columns}
            onChange={({ target }) =>
              handleOptions('columns', target.valueAsNumber)
            }
            width={60}
            max={50}
            min={1}
          />
        </div>
        <div className='canvas__options__item'>
          <Input
            type='number'
            label='Cell Width'
            initialValue={options.width}
            onChange={({ target }) =>
              handleOptions('width', target.valueAsNumber)
            }
            width={60}
          />
        </div>
        <div className='canvas__options__item'>
          <Input
            type='number'
            label='Cell Height'
            initialValue={options.height}
            onChange={({ target }) =>
              handleOptions('height', target.valueAsNumber)
            }
            width={60}
          />
        </div>
        <div className='canvas__options__item'>
          <label htmlFor='border'>Border</label>
          <Switch
            checked={options.border}
            onChange={({ target }) =>
              handleOptions('border', target.checked)
            }
            label='Border'
            placeholder='Name'
            id='border'
          />
        </div>
        <div className='canvas__options__item'>
          <label htmlFor='color'>Color</label>
          <ColorPicker
            options={options}
            handleOptions={handleOptions}
            id='color'
          />
        </div>
      </header>
      <main className='canvas__main'>
        <div
          className='canvas__container'
          style={{
            width: `${
              options.width * options.columns
            }px`
          }}
        >
          {rows.map((row, r) => {
            return (
              <div className='canvas__row' key={r}>
                {columns.map((column, c) => {
                  return (
                    <div className='canvas__column' key={c}>
                      <Shape {...options} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
