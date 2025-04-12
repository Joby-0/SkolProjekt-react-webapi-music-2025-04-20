import React, { Component, useState, useEffect, setState } from "react";


import { View } from '../plays/projekt/components/view'


export function ViewPage() {

    
    

  return (
    <div className="container px-4 py-4" id="view-item">
        <h2 className="pb-2 border-bottom">View details of a music group
          <a href="#edit-item"  >
            {/* <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#edit"/></svg> */}
          </a>
        </h2>
        <View/>
    </div>
    
  )
}
