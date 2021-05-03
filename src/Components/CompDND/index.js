import React from 'react';
import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './card';
import './styles.scss';

export const ItemTypes = {
  ITEM: 'item',
};

const cardArr = [
  { name: 1, id: 1 },
  { name: 2, id: 2 },
  { name: 3, id: 3 },
  { name: 4, id: 4 },
];

export default function DragNDrop() {
  return (
    <DndProvider backend={HTML5Backend}>
      {/* <ImageList images={images} onUpdate={onUpdate} /> */}
      <div className="grid">
        {cardArr.map((card) => (
          <Card key={card.id} image={card} />
        ))}

        <Dropable />
      </div>
    </DndProvider>
  );
}

const Dropable = ({ x, y, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ITEM,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      drop: (item, monitor) => console.log(item),
      //   drop: (item, monitor) => {
      //     console.log('item dropped', item);
      //   },
    }),
  });

  return (
    <div
      className="dropabble"
      ref={drop}
      style={{
        background: isOver ? 'blue' : 'white',
      }}
    >
      drop area
    </div>
  );
};
