import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setcolor] = useState("");
  const [error, seterror] = useState(false);
  const [val,setval]  = useState(10);
  //all(10) means we are moving from value to value by 10%
  const [list, setlist] = useState(new Values('#f15067').all(val));
  console.log(list)
 

  const handlesubmit = (e) => {
    e.preventDefault();

    try {
      
      
      
      let col = parseInt(val)
      console.log(col);
      let colors = new Values(color).all(col);
      setlist(colors)
      seterror(false)
      console.log(list);
    } catch (error) {
      seterror(true);
      console.log(error);
    }
    
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setcolor(e.target.value);
            }}
            placeholder='#f15025'
            className={`${error?'error':null}`}
          />
          <button className="btn" type="submit">
            get
          </button>

          <input
            type="number"
            value={val}
            onChange={(e) => {
              setval(e.target.value);
            }}
            placeholder='10%'
          
          />
          <button className="btn" type="submit">
            set
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color,index)=>{
         const hex = color.hex
          return(
            <SingleColor key={index} {...color} index ={index} hexcolor = {hex}/>
          )
        })}
      </section>
    </>
  );
}

export default App;
