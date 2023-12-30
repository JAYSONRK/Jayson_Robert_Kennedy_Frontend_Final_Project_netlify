import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Components/Card";
import Adata from "./Components/Adata";

const Project1 = () => {
    return (<>
        <div className="html-css-project my-5">
            <h1 className="text-center">HTML, CSS & JS Projects</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {Adata.map((val) => {
                            return (<Card
                            key= {val.id}
                                title= {val.title}
                                imgscr= {val.imgscr} 
                                js= {val.js} 
                                api= {val.api} 
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

export default Project1;