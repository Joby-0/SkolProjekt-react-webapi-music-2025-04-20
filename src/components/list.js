import { Link } from 'react-router'
import React from 'react'

export function List(props) {
    
    return (
            <div id="list" className='row mb-2 text-center'>
                {props?.pageItems?.map((artist) => (
                    <div key={props.pageItems.musicGroupId}  className="row mb-2 text-center bg-light align-items-center">
                        <div className="col-md-10 p-2">
                            <Link to={`../view/${artist.musicGroupId}`}>
                                {artist.name}
                            </Link>
                        </div>
                        <div className="col-md-2 p-2">
                            <Link
                                to={`/view/${artist.musicGroupId}`}
                                className="btn btn-secondary btn-sm m-1"
                            >
                                View
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
    )
}
