import React from 'react'
import { Link } from 'react-router'

export default function IndexPage() {
    return (
        <main>
            <div
                className="px-4 py-5 text-center d-flex align-items-center"
                
            >
                <div style={{ color: 'black' }}>
                    <h1 className="display-5 fw-bold text-warning-emphasis" style={{ color: 'black' }}>
                        Welcome to AppMusic
                    </h1>
                    <h2 className="display-5 fw-normal text-warning-emphasis">by Johan Bylander</h2>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4" style={{ color: 'black' }}>
                            AppMusic.com är platsen för dig som vill utforska musikvärlden och hitta nya favoritband. Här
                            kan du bläddra bland olika musikgrupper, läsa om deras historia och upptäcka deras mest
                            populära låtar. Oavsett om du gillar rock, pop, jazz eller metal finns det något för alla!
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link className="btn btn-primary btn-lg px-4 gap-3" to={'../'}>
                                Home
                            </Link>
                            <Link className="btn btn-outline-secondary btn-lg px-4" to={'../list'}>
                                Famous Groups
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
