import "./App.css";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import { useState } from "react";
import { useDndMonitor } from "@dnd-kit/core";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable id="draggable">
      <button>Drag me</button>
    </Draggable>
  );

  useDndMonitor({
    onDragEnd: (e) => {
      console.log(`from ${e.active?.id} to ${e.over?.id}`);
      if (e.over?.id === "droppable") setIsDropped(true);
    },
  });

  return (
    <div className="outer">
      {!isDropped ? draggableMarkup : null}
      <Droppable id="droppable">
        {isDropped ? draggableMarkup : "Drop here"}
      </Droppable>
    </div>
  );
}

export default App;
