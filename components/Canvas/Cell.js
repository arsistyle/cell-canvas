export const Cell = (props) => {
  return (
    <div
      className='canvas__cell'
      style={{
        backgroundColor: props?.color,
        outline: `${props.border ? 1 : 0}px solid #000`
      }}
    ></div>
  );
};
