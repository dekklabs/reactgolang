import React from 'react'
import { useSelector } from 'react-redux'

export const Dashboard = () => {

    const {user : {nombre}} = useSelector(state => state.user)

    return (
        <div>
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        Dashboard
                    </h1>
                    <h2 className="subtitle">
                        Hola {nombre}
                    </h2>
                    </div>
                </div>
            </section>
        </div>
    )
}
