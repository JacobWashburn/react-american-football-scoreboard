import React from 'react';
import "./App.css";


function AddButtons(props) {
    return (
        <section className="buttons">
            <div className="homeButtons">
                <button className="homeButtons__touchdown" onClick={() => {
                    props.add(props.home, props.addHome, props.tch)
                }}>Home Touchdown
                </button>
                <button className="homeButtons__fieldGoal" onClick={() => {
                    props.add(props.home, props.addHome, props.fg)
                }}>Home Field Goal
                </button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={() => {
                    props.add(props.away, props.addAway, props.tch)
                }}>Away Touchdown
                </button>
                <button className="awayButtons__fieldGoal" onClick={() => {
                    props.add(props.away, props.addAway, props.fg)
                }}>Away Field Goal
                </button>
            </div>
        </section>
    )
}

export default AddButtons

