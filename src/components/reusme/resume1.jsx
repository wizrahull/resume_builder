import React from "react";
import './resume1.css'
import JsPDF from 'jspdf';
export default function Resume1(props){
    // var doc = new JsPDF();


    function download_resume(){

        const pdf =new JsPDF('portrait','pt','a4');

        pdf.html(document.querySelector(".resume-box")).then(()=> {
            pdf.save('resume.pdf')
        })
    }
    return(

        <>
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
                <button   onClick={download_resume}> Save </button>
                </>

    )
}