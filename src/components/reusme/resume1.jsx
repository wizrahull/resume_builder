import React from "react";
import './resume1.css'
import JsPDF from 'jspdf';
export default function Resume1(props){
    // var doc = new JsPDF();

    // style={{color: "red" ,width:"200px"}}/
    function download_resume(){
        const margins = {
            top: 40,
            bottom: 60,
            left: 0,
            width: 522
          };

        const pdf =new JsPDF('l','pt','a4');
        pdf.html(margins.left)
        pdf.html(  document.querySelector(".resume-box")).then(()=> {
            pdf.save('resume.pdf')
        })
    }
    return(

       <div id="outer-box">
                <div className="resume-box">

                        < div className="resume-header">
                            <img id='avatar-img'    alt="avatar" src={props.image} />
                            <h4>{props.name}</h4>
                            <hr style={{width: "100%"}}/>
                        </div>
                        
                        <div className="resume-body">

                            <div className="resume-left-1">
                                   <p><b>Address : </b> {props.address}</p>    

                                   <p><b>E-mail : </b> {props.email}</p> 
                                   <p><b>Phone  :</b> {props.phone}</p> 
                                    <p><b>LinkedIn : </b> {props.linkedin}</p> 

                            </div>

                                <div className="resume-left-2">
                                    <b>PROFESSIONAL SUMMARY </b>
                                    <p>{props.summary}</p>
                                </div>
                                <div className="reusme-left-3">
                                    <b>TECHNICAL SKILLS</b>
                                    <p> {props.tech_skills}</p>
                                </div>


                                <div className="reusme-left-4">
                                    <b>INTERPERSONAL SKILLS</b>
                                    <p> {props.ipskills}</p>
                                </div>

                                <div className="resume-right">
                                    <div className="right-resume-1">
                                    <b>EDUCATION</b>

                                    <p> {props.education}</p>
                                    </div>

                                    <div className="right-resume-2">
                                    <b>TRAINING & PROJECTS</b>

                                    <p> {props.projects}</p>
                                    </div>





                                </div>
                        </div>


                </div>
                <button id="download-resume"  onClick={download_resume}> Save </button>
                </div>

    )
}