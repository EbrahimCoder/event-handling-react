import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [isActive, setActive] = useState(false);

  function handleMouseOver() {
    setActive(true);
  }

  function handleMouseOut() {
    setActive(false);
  }

  function handleClick(event) {
    setName("Marvel");
    /* Prevents the default event behaviour 
       which is about refreshing the page in this case */
    event.preventDefault();
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{name}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          /* Note that here we are setting the value of the input to the state
          that way the state becomes the single "source of truth". */
          value={name}
        />
        <button
          /* onClick={handleClick} */
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={
            isActive
              ? { backgroundColor: "black" }
              : { backgroundColor: "white" }
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
