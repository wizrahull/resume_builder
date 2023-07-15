import React from "react";
import './resume1.css'
export default function Resume1(props){

    return(
                <div className="resume-box">

                        < div className="resume-header">
                            <img id='avatar-img'    alt="avatar" src={props.image} />
                            <h4>{props.name}</h4>
                        </div>
                        <div className="resume-body">

                            <div className="resume-left">
                                        

                            </div>


                                <div className="resume-right">





                                </div>
                        </div>



                </div>
    )
}