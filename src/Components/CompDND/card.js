import React, { useRef } from 'react';
// import useDrag and useDrop hooks from react-dnd
import { useDrag, useDrop } from 'react-dnd';
import './styles.scss';

const type = 'Image'; // Need to pass which type element can be draggable, its a simple string or Symbol. This is like an Unique ID so that the library know what type of element is dragged or dropped on.
export const ItemTypes = {
  ITEM: 'item',
};

const Image = ({ image, index }) => {
  const ref = useRef(null); // Initialize the reference

  //1o props object => Props que coletou do Dnd
  //2o ref function pra attachar o DOM pro react-dnd naquele componente especifico
  const [{ isDragging, ...extraProps }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: {
      type: ItemTypes.ITEM,
      //   id: image.id,
    }, // specify type of item being dragged
    collect: (monitor) => ({
      //função coletora -> transofrma state DnD pra props uteis pros ocmponents
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        border: '1px solid red',
      }}
    >
      <span>oi</span>
    </div>
  );
};

export default Image;
