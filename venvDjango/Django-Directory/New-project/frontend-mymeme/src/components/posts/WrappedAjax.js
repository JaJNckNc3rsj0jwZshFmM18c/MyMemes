import AjaxPost from "./AjaxPost.js";
import React, { Component } from "react";


export const WrappedAjax = React.forwardRef((props, ref) =>  <AjaxPost 
  innerRef={ref} {...props}

 

/>  );

export default WrappedAjax;