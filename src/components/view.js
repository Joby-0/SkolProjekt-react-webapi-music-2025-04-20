import React, { Component, useState, useEffect, setState } from "react";

export function View(props) {

    console.log(props.apidata);
    

    return (
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
            <div className="col-md-7 col-lg-10">
                <form className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="groupName" className="form-label">Group Name</label>
                            <input type="text" className="form-control" id="groupName" value={props.apidata?.name} readOnly />
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <input type="text" className="form-control" id="genre" value={props.apidata?.strGenre} readOnly />
                        </div>

                        <div className="col-sm-6"></div>

                        <div className="col-sm-6">
                            <label htmlFor="established" className="form-label">Established Year</label>
                            <input type="text" className="form-control" id="established" value={props.apidata?.establishedYear} readOnly />
                        </div>
                    </div>

                    <div id="artists" className="row g-1 mt-4">
                        <h3 className="pb-2">Artists</h3>
                        {
                            props.apidata?.artists?.map((artist) => (
                                <div className="row mb-2 text-center">
                                    <div className="col-md-12 themed-grid-col">{artist.firstName} {artist.lastName}</div>
                                </div>
                            ))
                        }
                    </div>

                    <div id="albums" className="row g-1 mt-4">
                        <h3 className="pb-2">Albums</h3>

                        <div className="row mb-2 text-center">
                            <div className="col-md-10 themed-grid-head-col">Name</div>
                            <div className="col-md-2 themed-grid-head-col">Year</div>
                        </div>
                        {props.apidata?.albums?.map((album)=> (
                            <div className="row mb-2 text-center">
                                <div className="col-md-10 themed-grid-col">{album.name}</div>
                                <div className="col-md-2 themed-grid-col">{album.releaseYear}</div>
                            </div>
                        ))}


                    </div>
                </form>
            </div>
        </div>
    );
}


