import React, { useContext } from "react";
import storeData from "../app/Store";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./bolly.css";
const Technology = () => {
  const [TData] = useContext(storeData);
  return (
    <>
      <Navbar />
      <div className="maines_box">
        <div className="box1">
          <div className="Headtag">Technology</div>
         
          <div className="news_card123">
            {TData.filter((item) => item.cat === "Technology")
              .slice(0, 9)
              .map((data) => {
                return (
                  <>
                    {
                     <NavLink to={`/dynamiccomp/${data.id}`}
                        className={"nav_link"}
                      >
                        <div className="news_box">
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"img_card"}
                            />
                          </div>
                          <div className="head_card">
                            <h3>{data.heading}</h3>
                            <p>{data.description.slice(0, 150)}...</p>
                            <span className="travel">
                              Travel
                              <span className="travel_details">
                                /Sept 5 2023
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                      </NavLink>
                    }
                  </>
                );
              })}
          </div>
        </div>
        <div className="box2">
          <h1 className="head">Top Posts</h1>
         
          {TData.filter((item) => item.id === 74).map((data) => {
            return (
              <>
                {
                 <NavLink to={`/dynamiccomp/${data.id}`}
                    className={"nav_link"}
                  >
                    <div className="top_post">
                      <img
                        src={data.image}
                        alt="not found"
                        className={"top_post_img1"}
                      />
                      <div>
                        <div className="top_post_data1">
                          <div>
                            {" "}
                            <h3>{data.heading}</h3>
                            <div className="travel">
                              <h4>
                                Travel{" "}
                                <span className="travel_details">
                                  /Sept 5 2023
                                </span>{" "}
                              </h4>
                            </div>
                          </div>
                          <div>
                            <span className="top-post-count">1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                }
              </>
            );
          })}
          {TData.filter((item) => item.id === 70).map((data) => {
            return (
              <>
                {
                <NavLink to={`/dynamiccomp/${data.id}`}
                    className={"home1"}
                  >
                    <div className="top_post2">
                      <div>
                        <img
                          src={data.image}
                          alt="not found"
                          className={"top_post_img2"}
                        />
                      </div>
                      <div className="top_post_data2">
                        <h5>{data.heading}</h5>
                        <div className="travel">
                          <h6>
                            Travel{" "}
                            <span className="travel_details">
                              /Sept 5 2023
                            </span>{" "}
                          </h6>
                        </div>
                      </div>
                      <div>
                        <span className="top-post-count">2</span>{" "}
                      </div>
                    </div>
                  </NavLink>
                }
              </>
            );
          })}
          {TData.filter((item) => item.id === 73).map((data) => {
            return (
              <>
                {
               <NavLink to={`/dynamiccomp/${data.id}`}
                    className={"home1"}
                  >
                    <div className="top_post2">
                      <div>
                        <img
                          src={data.image}
                          alt="not found"
                          className={"top_post_img2"}
                        />
                      </div>
                      <div className="top_post_data2">
                        <h5>{data.heading}</h5>
                        <div className="travel">
                          <h6>
                            Travel{" "}
                            <span className="travel_details">
                              /Sept 5 2023
                            </span>{" "}
                          </h6>
                        </div>
                      </div>
                      <div>
                        <span className="top-post-count">3</span>{" "}
                      </div>
                    </div>
                  </NavLink>
                }
              </>
            );
          })}
          {TData.filter((item) => item.id === 72).map((data) => {
            return (
              <>
                {
                 <NavLink to={`/dynamiccomp/${data.id}`}
                    className={"home1"}
                  >
                    <div className="top_post2">
                      <div>
                        <img
                          src={data.image}
                          alt="not found"
                          className={"top_post_img2"}
                        />
                      </div>
                      <div className="top_post_data2">
                        <h5>{data.heading}</h5>
                        <div className="travel">
                          <h6>
                            Travel{" "}
                            <span className="travel_details">
                              /sept 5 2023
                            </span>{" "}
                          </h6>
                        </div>
                      </div>
                      <div>
                        <span className="top-post-count">4</span>{" "}
                      </div>
                    </div>
                  </NavLink>
              }{" "}
              <div className="ads">
                <iframe
                  src="https://giphy.com/embed/7VzgMsB6FLCilwS30v"
                  style={{ width: "328px", height: "100%", border: "none" }}
                  title="ad"
                ></iframe>
              </div>
            </>
          );
        })}
      </div>
    </div>
      <Footer />
    </>
  );
};
export default Technology;
