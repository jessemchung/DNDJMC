import * as React from 'react';
import { useState } from "react";

const RightClickMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // Handle right-click event
  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the default context menu
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setMenuVisible(true);
  };

  // Close the menu when clicking anywhere else
  const handleClickOutside = () => {
    setMenuVisible(false);
  };

  return (
    <div onClick={handleClickOutside} style={{ height: "100vh", width: "100vw" }}>
      <button onContextMenu={handleRightClick} style={{ margin: "50px" }}>
        Right Click Me
      </button>

      {menuVisible && (
        <ul
          style={{
            position: "absolute",
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            listStyle: "none",
            zIndex: 1000,
          }}
        >
          <li style={{ padding: "5px 10px", cursor: "pointer" }}>Option 1</li>
          <li style={{ padding: "5px 10px", cursor: "pointer" }}>Option 2</li>
          <li style={{ padding: "5px 10px", cursor: "pointer" }}>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default RightClickMenu;