import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../COMPONENTS/Card";
import Bdata from "../DATA/Bdata";

const Project2 = () => {
    return (<>
        <div className="bootstrap my-5">
            <h1 className="text-center">Full Fledged Websites <br/> (SME)</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {Bdata.map((val) => {
                            return (<Card
                            key= {val.id}
                                title= {val.title}
                                imgscr= {val.imgscr}  
                                react={val.react}
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

export default Project2;