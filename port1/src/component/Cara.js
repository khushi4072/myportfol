import { useNavigate } from "react-router-dom";

function Cara()

{
  const navigate =useNavigate()
  const change1= ()=>{
    navigate('/about')
  }
    return(

/* <div id="carouselExampleSlidesOnly" className="carousel slide " data-ride="carousel ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="show"   src="https://mcdn.wallpapersafari.com/medium/24/77/TVJbRv.jpg" alt="First slide"
      />
      <div class="carousel-caption text-white d-flex align-items-center justify-content-center">
        <h3>First slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://media.istockphoto.com/id/481659354/photo/abstract-3d-rendering-of-low-poly-white-surface.jpg?s=612x612&w=0&k=20&c=uroYqYCSVY1OAwuDSYCmBtSbjzDPe4ynixRIdQRYOYA=" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
</div>  */
<div className="container-fluid fluid1 bg-primary">

<div class="container-fluid my-container bg-primary justify-content-center ">
  <div className="row">
    <div >
  <h1 className="h display-2 text-warning fw-bold" >HEY, KHUSHI SINGH HERE</h1>
  </div>
  <h4 className="mt-5">A focused Digital-Marketor And  MERN Web Developer building the MERN technology Websites
   <br></br>that leads to the success of the overall product</h4>
   <h4 className="mt-3 fs-5 text-warning">"The road to success is not easy to navigate, but with hard work, drive and passion,<br></br> it's possible to achieve your dream." — KHUSHI</h4>
  <div>
  <button className="btn btn-lg btn-warning  px-5  mt-5 fw-bold" onClick={change1} style={{fontFamily:'Franklin Gothic Medium	'}}>ABOUT ME</button>
  </div>
  {/* <div>
  <img src="https://lordicon.com/icons/system/outline/41-home"></img>
  </div> */}

  </div>
</div>
</div>


   

)
}
export default Cara;