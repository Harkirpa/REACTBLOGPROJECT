import React, { useContext } from "react";
import storeData from "../app/Store";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./bolly.css";
const Bollywood = () => {
  const [BData] = useContext(storeData);
  return (
    <>
      <Navbar />
      <div className="maines_box">
        <div className="box1">
          <div className="Headtag">Bollywood</div>
          {/* <hr className="Hr" /> */}
          <div className="news_card123">
            {BData.filter((item) => item.cat === "Bollywood")
              .slice(0, 9)
              .map((data) => {
                return (
                  <>
                    {
                      <Link
                        to="/dynamiccomp/"
                        state={{ index: data.id }}
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
                      </Link>
                    }
                  </>
                );
              })}
          </div>
        </div>
        <div className="box2">
          <h1 className="head">Top Posts</h1>
          {/* <hr className="Hr2" /> */}
          {BData.filter((item) => item.id === 10).map((data) => {
            return (
              <>
                {
                  <Link
                    to="/dynamiccomp/"
                    state={{ index: data.id }}
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
                  </Link>
                }
              </>
            );
          })}
          {BData.filter((item) => item.id === 11).map((data) => {
            return (
              <>
                {
                  <Link
                    to="/dynamiccomp/"
                    state={{ index: data.id }}
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
                            <span className="travel_details">/Sept 5 2023</span>{" "}
                          </h6>
                        </div>
                      </div>
                      <div>
                        <span className="top-post-count">2</span>{" "}
                      </div>
                    </div>
                  </Link>
                }
              </>
            );
          })}
          {BData.filter((item) => item.id === 15).map((data) => {
            return (
              <>
                {
                  <Link
                    to="/dynamiccomp/"
                    state={{ index: data.id }}
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
                            <span className="travel_details">/Sept 5 2023</span>{" "}
                          </h6>
                        </div>
                      </div>
                      <div>
                        <span className="top-post-count">3</span>{" "}
                      </div>
                    </div>
                  </Link>
                }
              </>
            );
          })}
          {BData.filter((item) => item.id === 14).map((data) => {
            return (
              <>
                {
                  <Link
                    to="/dynamiccomp/"
                    state={{ index: data.id }}
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
                            <span className="travel_details">/Sept 5 2023</span>{" "}
                          </h6>
                        </div>
                      </div>
                      <div>
                        <span className="top-post-count">4</span>{" "}
                      </div>
                    </div>
                  </Link>
                }{" "}
                <div className="ads">
                  <iframe
                    src="https://giphy.com/embed/bkWEMm8g6cwMACuXL8"
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
export default Bollywood;
