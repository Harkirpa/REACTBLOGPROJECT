import React, { useContext } from "react";
import { NavLink,Link,  useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import storeData from "../app/Store";
import rythm from "../Images/rythm.svg"
import { handle } from "./handle";
import share from "../Images/share.svg";
import woman from "../Images/woman .png";
import "./Dynamiccomp.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Footer from "./Footer";
const DynamicComp = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const data = useContext(storeData);
  console.log(data);
  // const blog_id = useLocation().state.index;
  //   console.log("bye"+blog_id)
  const id=useParams().id
  console.log( typeof id)
  const updateddata = data[0].filter((item) => item.id === parseInt(id));
    // console.log(updateddata)

  return (
    <>
      <header className="header2">
        <Link to="/">
          <h1 className="tthe">The</h1>
          <b className="nei">Siren</b>
        </Link>
        <button id="get_start">Get Started</button>
      </header>
      <button id="back" onClick={goBack}>
        Back
      </button>
      <div id="shareIcon">
        <div className="Likebox">
          <img src={rythm} alt="not found" />
          <span>9.3k</span>
        </div>
        <div className="Sharebox">
          <img src={share} alt="not found" />
          <span>share this article</span>
        </div>
      </div>
            <div className='Content'>
                <div className='Content_Title'>{updateddata[0].heading}</div>
                <div className='Author'>
                  <div className='userIcon'>
                    <img src={woman} alt='not found'/>
                    <span className="date"><p>Harkirpa Kaur</p>1 July 2023</span>
                  </div>
                  <div className="logos">
                  <AiFillFacebook />
            <AiFillTwitterSquare />
            <AiFillInstagram />
            <AiFillYoutube />
                  </div>
                </div>
                <div><img className='Content_Image' src={updateddata[0].image} alt='not found'/></div>
                <div className='Content_Desc'>
               <h2 className="descrheading">{updateddata[0].description}</h2> 
                    
                </div>
                <p className="description">{updateddata[0].largdesc}</p>
                
                <div className="Likebox">
                  <img src={rythm} alt="not found" />
                  <span>9.3K claps</span>
                </div>
                <div className="icon2">
          <img src={woman} alt="not found" />
          <div className="span">
            <span>Written by:</span>
            <br></br>
            <span>
              <b>Harkirpa Kaur</b>
            </span>
            <br></br>
            <span>July 1 2023</span>
          </div>
        </div>
            </div>
            <div className="dynamicContainer2">
   
          <div className="dynamicMoreItems">More From The Siren</div>
          <div className="footercards">
            {data[0]
              .filter(
                (item) => item.id % 5 === 0 && item.cat === updateddata[0].cat
              )
              .map((item, index) => {
                return (
                  <div className="footerContainer" key={index}>
                    <div className="cardImage" onClick={handle}>
                      <NavLink to={`/dynamiccomp/${item.id}`}>
                        <img
                          width="100%"
                          height="100%"
                          src={item.image}
                          alt="Not found"
                        ></img>
                      </NavLink>
                    </div>
                   
                      <div className="cardHeading">{item.heading}</div>
                    </div>
                  
                );
              })}
          </div>
         
      </div>
      <Footer/>
    </>
  );
};

export default DynamicComp;
