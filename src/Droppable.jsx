import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Droppable(props) {
  if (!props.id) throw Error("Missing prop 'id'");
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export { Droppable };
