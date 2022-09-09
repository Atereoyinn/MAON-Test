import MoveOut from "./MoveOut";
import { useSelector } from "react-redux";
import { useState } from "react";

const MoveOutList = () => {
  const data = useSelector((state) => state.db);
  const [list, setList] = useState(data);
  const moveUp = (id) => {
    let firstOnList;
    const filteredList = list.filter((el) => {
      if (el.id === id) {
        firstOnList = [el];
        return false;
      }
      return true;
    });
    setList([...firstOnList, ...filteredList]);
  };
  return (
    <div>
      {list.length
        ? list.map((item) => (
            <MoveOut key={item.id} item={item} moveUp={moveUp} />
          ))
        : "Error: empty list"}
    </div>
  );
};

export default MoveOutList;
