import React from "react";
import { useDraggable } from "@dnd-kit/core";

const Draggable = (props) => {
  if (!props.id) throw Error("Missing prop 'id'");
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
};

export { Draggable };
