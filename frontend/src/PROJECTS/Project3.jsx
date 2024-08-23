import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../COMPONENTS/Card";
import Cdata from "../DATA/Cdata";

const Project3 = () => {
    return (<>
        <div className="apps-api my-5">
            <h1 className="text-center">Mobile Apps <br/> (SME)</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {Cdata.map((val) => {
                            return (<Card
                            key= {val.id}
                                title= {val.title}
                                imgscr= {val.imgscr} 
                                reactnative={val.reactnative}
                                nodejs = {val.nodejs}
                                mongodb = {val.mongodb}
                                mysql = {val.mysql}
                                github= {val.github} 
                                visit= {val.visit}
                            />)
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div id="go-back" className="text-center mb-5">
            <NavLink to='/projects' className="btn-go-back">Go Back</NavLink>
        </div>
    </>)
}

export default Project3;