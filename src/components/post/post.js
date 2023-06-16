import React from "react";
import {Navlink} from 'react-router-dom';
import classes from "./post.module"; 

function Post() {
  return (
    <div>
      <ul>
        <li>
          <navlink classame={classes.info} to="">
            Postpage
          </navlink>
        </li>
      </ul>
    </div>
  );
}
export default Post;