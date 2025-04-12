import React from 'react'

export function List(props) {
    
    return (
            <div id="list" className='row mb-2 text-center'>
                {props?.pageItems?.map((artist) => (
                    <div  className="row mb-2 text-center bg-light align-items-center">
                        <div className="col-md-10 p-2">
                            <a href={`/viewitem.html?id=${artist.musicGroupId}`}>
                                {artist.name}
                            </a>
                        </div>
                        <div className="col-md-2 p-2">
                            <a
                                href={`/viewitem.html?id=${artist.musicGroupId}`}
                                className="btn btn-secondary btn-sm m-1"
                            >
                                View
                            </a>
                        </div>
                    </div>
                ))}
            </div>
    )
}
