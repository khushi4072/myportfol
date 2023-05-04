import React from "react";
import img from './Project.png'
function Projects() {

  return (
    <>
      <div className="container-fluid fluid2 pt-2 ">
        <div class="container my-container2  ">
          <div className="row">
            <div>
              <h1 className="mt-5 fw-bold " >PROJECTS</h1>
              <h5 className="mt-4"  >Here you will find more information about me, what I do,<br></br> and my current skills mostly in terms of programming and technology</h5>
            </div>
            <br></br>
            <div className="col ">
              {/* <h2 className=" main mr-5 text-primary"style={{fontFamily:'Franklin Gothic Medium	'}}>GET MORE</h2> */}
              
              <div>
                <img src={img} className="img1 mr-5" alt=""></img>
              </div>
              
            </div>

            <div className="col" >
              <h2 className=" main ml-5 text-primary"style={{fontFamily:'Franklin Gothic Medium	'}}>NEWS MONKEY </h2>
              <p className="mt-4 "> News Fetching Application <br></br>
              
            Key Skills: Html, Bootstrap, JavaScript, React Js </p>
              <div>
              <a href="https://github.com/khushi4072/news-monkey" target="_blank" > <button className="btn btn-primary btn-warning  px-4 mb-4"style={{fontFamily:'Franklin Gothic Medium	'}}>Projects</button></a>
              </div>



            </div>

            <div class="w-100"></div>

            <div className="col" >
              <h2 className=" main ml-5 text-primary"style={{fontFamily:'Franklin Gothic Medium	'}}>TEXTUTILS </h2>
              <p className="mt-4 ">TEXTUTILS Application <br></br> Key Skills: Html, Bootstrap, JavaScript, React Js </p>

              <div>
               <a href="https://textutilsplatforms.netlify.app/" target="_blank">  <button  className="btn btn-primary btn px-4 btn-warning  " style={{fontFamily:'Franklin Gothic Medium	'}}>Projects</button></a>
              </div>

            </div>
            <div className="col ">
              {/* <h2 className=" main mr-5 text-primary"style={{fontFamily:'Franklin Gothic Medium	'}}>GET MORE  </h2> */}
              <div>
                <img src={img} className="img1 mr-5" alt=""></img>
              </div>
              
            </div>

            <div class="w-100"></div>






            <div className="col col3 ">
              {/* <h2 className=" main mr-5 text-primary"style={{fontFamily:'Franklin Gothic Medium	'}}>GET MORE </h2> */}
              <div>
                <img src={img} className="img1 mr-5" alt=""></img>
              </div>
             
            </div>
            <div className="col" >
              <h2 className=" main ml-5 text-primary "style={{fontFamily:'Franklin Gothic Medium	'}}>GO FOOD </h2>
              <p className="mt-4 "> GO FOOD Application<br></br> Key Skills: Html, Bootstrap, JavaScript, React Js ,Express Js ,Node Js,MongoDB</p>
              <div>
                <button className="btn btn-primary btn-warning   px-4" style={{fontFamily:'Franklin Gothic Medium	'}}>Projects</button>
              </div>
            </div>


          </div>



        </div>
      </div>



    </>

  )
}
export default Projects;