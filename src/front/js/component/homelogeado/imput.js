import React from "react";

export default function Input(props){
    return(
        <div id="input" className="form-floating">
          <form onSubmit={props.handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="thank"
              onChange={props.handleChange}
             //thanks.text
            />
          </form>
        </div>
    )
};