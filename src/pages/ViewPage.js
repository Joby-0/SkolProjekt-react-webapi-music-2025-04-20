import React, { Component, useState, useEffect, setState } from "react";
import { useParams } from 'react-router';


import { View } from '../components/view'


export function ViewPage() {
  const { id } = useParams();
  const [apidata, setapidata] = useState();
    useEffect(() => {
        (async () => {
            try {
                
                let response = await fetch(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api/MusicGroup/ReadItem?id=${id}&flat=false`);
                let data = await response.json();
                console.log("", data);

                setapidata(data);
            } catch (error) {
                console.error('Error:', error);
            }

        })();
    }, []);
    
    

  return (
    <div className="container px-4 py-4" id="view-item">
        <h2 className="pb-2 border-bottom">View details of a music group
          <a href="#edit-item"  >
            {/* <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#edit"/></svg> */}
          </a>
        </h2>
        <View apidata = {apidata}/>
    </div>
    
  )
}
