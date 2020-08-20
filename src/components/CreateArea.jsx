import React, { useState } from "react";

function CreateArea(props) {
  const [change, SetChange] = useState({
    title: "",
    content: ""
  });

  function HandleChange(event) {
    const { value, name } = event.target;
    SetChange(prevalue => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  }

  function HandleClick(event) {
    props.onAdd(change);
    SetChange({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={HandleChange}
          value={change.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={HandleChange}
          value={change.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={HandleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
