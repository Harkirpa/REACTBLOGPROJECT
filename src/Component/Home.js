import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { handle } from "./handle";
import storedata from "../app/Store";
const Home = () => {
    const [data] = useContext(storedata);
    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <div className="photos">
                    <div className="largeImge">
                        <img src="https://m.economictimes.com/thumb/msid-103549289,width-1200,height-630,resizemode-4,imgsize-47850/g20-summit-india-ready-to-lead-the-new-digital-age.jpg" alt="not found"></img>
                        <div className="img-text">G20 New Delhi Leaders’ Declaration: Sense of the consensus</div>
                    </div>
                    <div className="sideimgContainer">
                        <div className="sideImges">
                            <img src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg" alt="Not found"></img>
                            <div className="sideimg-text">iPhone 15 is launching today</div>
                        </div>
                        <div className="sideImges">
                            <img src="https://www.aljazeera.com/wp-content/uploads/2023/09/AP22296449367053-1694513306.jpg?resize=770%2C513&quality=80" alt="Not found"></img>
                            <div className="sideimg-text">Virat Kohli breaks Sachin Tendulkar's record during stunning Asia Cup hundred</div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="thelatest">The Latest</h2>

            <div className="home_latest">
                <div className="home_latest2">
                    {data.filter((item) => {
                            return item.cat === "Bollywood" && item.id === 2;
                        }).map((element) => {
                            return (
                                <>
                                    {
                                        <NavLink to={`/dynamiccomp/${element.id}`}
                                            className={"nav_link"}
                                        >
                                            <img src={element.image} alt="not found"></img>
                                            <h3>{element.heading}</h3>
                                            <p>{element.description}</p>
                                        </NavLink>
                                    }

                                </>
                            )
                        })
                    }
                </div>


                <div className="home_latest2">
                    {
                        data.filter((item) => {
                            return item.cat === "Technology" && item.id === 62;
                        }).map((element) => {
                            return (
                                <>
                                    {
                                        <NavLink to={`/dynamiccomp/${element.id}`}
                                            className={"nav_link"}
                                        >
                                            <img src={element.image} alt="not found"></img>
                                            <h3>{element.heading}</h3>
                                            <p>{element.description}</p>
                                        </NavLink>
                                    }

                                </>
                            )
                        })
                    }
                </div>
                <div className="home_latest2">
                    {
                        data.filter((item) => {
                            return item.cat === "Fitness" && item.id === 31;
                        }).map((element) => {
                            return (
                                <>
                                    {
                                        <NavLink to={`/dynamiccomp/${element.id}`}
                                            className={"nav_link"}
                                        >
                                            <img src={element.image} alt="not found"></img>
                                            <h3>{element.heading}</h3>
                                            <p>{element.description}</p>
                                        </NavLink>
                                    }

                                </>
                            )
                        })
                    }
                </div>
            </div>
            <h2 className="home_head1">Latest Article</h2>
            <div className="latest_article">
                <div className="latest_article1">
                    {
                        data.filter((item) => item.id > 68 && item.id < 73).map((data) => {
                            return (
                                <>
                                    {
                                        <NavLink to={`/dynamiccomp/${data.id}`}
                                            className={"nav_link"}
                                        >
                                            <div className="latest_left1" onClick={handle}>
                                                <div className="viewhome" >
                                                    <img src={data.image} alt="not found"></img>
                                                </div>
                                                <div className="latest_left_content">
                                                    <h3>{data.heading}</h3>
                                                    <p>{data.description}</p>
                                                </div>
                                            </div>
                                            <hr></hr>

                                        </NavLink>
                                    }

                                </>
                            )
                        })
                    }

                    <div className='loadmore'>
                        {
                            data.filter((item) => item.id === 79).map((data) => {
                                return (
                                    <>
                                        {
                                            <NavLink to={`/dynamiccomp/${data.id}`} className={"nav_link"} >
                                                <img src={data.image} alt="not found"></img>

                                            </NavLink>
                                        }

                                    </>
                                )
                            })
                        }
                    </div>

                </div >
                <div className='latest_parent'>
                    <div className="latest_ads"> <iframe
                        src="https://giphy.com/embed/CqS6nhPTCu6e5v2R03"
                        style={{ width: "328px", height: "100%", border: "none" }}
                        title="ad"
                    ></iframe></div>


                    <div className='top1st-big'>
                        <h3>Top Post</h3>
                        {
                            data.filter((item) => item.id === 80).map((data) => {
                                return (
                                    <>
                                        {
                                            <div className='hov'>
                                                <NavLink to={`/dynamiccomp/${data.id}`} className={"nav_link"} >
                                                    <img src={data.image} alt="not found"></img>
                                                    <h3>{data.heading}</h3>

                                                </NavLink>
                                            </div>
                                        }

                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='top2nd-smal'>

                        {
                            data.filter((item) => item.id === 79).map((data) => {
                                return (
                                    <>
                                        {
                                            <NavLink to={`/dynamiccomp/${data.id}`} className={"nav_link"} >
                                                <div className='topsmall-first' onClick={handle}>
                                                    <img src={data.image} alt="not found"></img>
                                                    <h3>{data.heading}</h3>
                                                </div>


                                            </NavLink>
                                        }

                                    </>
                                )
                            })
                        }

                        {
                            data.filter((item) => item.id === 69).map((data) => {
                                return (
                                    <>
                                        {
                                            <NavLink to={`/dynamiccomp/${data.id}`} className={"nav_link"} >
                                                <div className='topsmall-first' onClick={handle}>
                                                    <img src={data.image} alt="not found"></img>
                                                    <h3>{data.heading}</h3>
                                                </div>


                                            </NavLink>
                                        }

                                    </>
                                )
                            })
                        }

                        {
                            data.filter((item) => item.id === 59).map((data) => {
                                return (
                                    <>
                                        {
                                            <NavLink to={`/dynamiccomp/${data.id}`} className={"nav_link"} >
                                                <div className='topsmall-first' onClick={handle}>
                                                    <img src={data.image} alt="not found"></img>
                                                    <h3>{data.heading}</h3>
                                                </div>


                                            </NavLink>
                                        }

                                    </>
                                )
                            })
                        }

                    </div>

                </div>
            </div>


            <h2 className='latest_story_header'>Latest Stories</h2>
            <div className='latest_story_parent'>

                {
                    data.filter((item) => item.id > 40 && item.id < 44).map((data) => {
                        return (
                            <>
                                {
                                    <NavLink to={`/dynamiccomp/${data.id}`} className={"nav_link"} >
                                        <div className='latest_story_child' onClick={handle}>
                                            <h3>{data.heading}</h3>
                                            <p>{data.largdesc}</p>
                                            <span className="travel">
                                                Travel
                                                <span className="travel_details">
                                                    /Sept 5 2023
                                                </span>{" "}
                                            </span>
                                        </div>
                                    </NavLink>
                                }

                            </>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    );
};
export default Home;
