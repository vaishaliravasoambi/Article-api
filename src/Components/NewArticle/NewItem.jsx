import React from "react";
import "./NewItem.css"

function NewItem({ getData, submitData }) {
  // const [select,setSelect]=useState("")
  // const selectedField=(e)=>{
  //   console.log(e.target.value)
  //      setSelect({select:e.target.value})
  // }
  return (
    <div className="rootDiv">
      <div className="container parent">
          <div>
      <label>ID :</label><input
            type="text"
            name="ID"
            id="article_1"
            onChange={(e) => getData(e, "ID")}
          />
          </div>
        
           <div>
              <label>Title :</label>
              <input
                type="text"
                name="Title"
                id="article_2"
                onChange={(e) => getData(e, "Title")}
              />
              </div>
           <div>
                <label>Description :</label>
                <input
                  type="text"
                  name="Description"
                  id="article_3"
                  onChange={(e) => getData(e, "Description")}
                />
              </div>  
              <div className="drop">
                <label className="dropl">Type :</label>
                <select defaultValue="sort" onChange={(e)=>getData(e,"tag")}>
                <option disabled value="sort">select</option>
                <option value="sports">sports</option>
                <option value="finance">Finance</option>
                 </select>
                </div>
              <button className="rdr_btn" onClick={() => submitData()}>Submit</button>
           </div>     

     
    </div>
  );
}

export default NewItem;
