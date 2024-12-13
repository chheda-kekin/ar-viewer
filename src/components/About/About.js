import "./About.css";
import React, { useEffect } from "react";
import tick from './tick.png';
import archery from './archery.png';
import gun from './rightimg3.png'
import img1 from './prob1.jpg'
import img2 from './prob2.jpg'

const About = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".fromtop-anim, .fade-effect, .aboutrightsec, .left-img-effect, .right-img-effect");

        const observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    const [setShowScrollUpButton] = React.useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const showButtonThreshold = 200;
  
        // Show the scroll-up button when the user scrolls down
        setShowScrollUpButton(scrollY > showButtonThreshold);
      };
  
      // Add event listener for scroll
      window.addEventListener("scroll", handleScroll);
  
      // Remove event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });

    return (
        <>
            <div className="about-banner">
                <div className="about-banner-front">
                    <div className="aboutleft"><div className="aboutleftsec fromtop-anim">NeoVerse AR lite</div>
                        <p className="abouleftseccont fade-effect">A web application for immersive augmented reality Site-planning experiences.</p></div>

                    <img src={gun} className="aboutrightsec" />


                </div>

            </div>
            <div>
                <h1 className="second-head fromtop-anim">Why NeoVerse AR lite ?</h1>
                <div className="prob-box">
                    <img src={img1} className="prob-img left-img-effect" />
                    <div className="about-prob fade-effect">
                        <p className="about-prob-header"><i>Problem</i></p>
                        <p className="about-prob-sol">Traditional platforms fail to deliver immersive experiences to various teams,
                            leaving them uncertain about the look, fit, and functionality of items. This lack of
                            visualization leads to higher re-engineering rates as products may not meet expectations. Additionally,
                            customer engagement suffers due to the limited ability to interact with and explore products online.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="prob-box2">

                    <div className="about-prob fade-effect">
                        <p className="about-prob-header" style={{ "padding": "1vh", "width": "70%" }}><i>Solution</i></p>
                        <p className="about-prob-sol2"> With NeoVerse AR lite, customers can visualize products
                            in their own spaces and view all the virtual features more clearly. This empowers
                            them to make informed decisions, reduces re-engineering costs, and enhances
                            engagement, resulting in a more fulfilling and immersive experience for the stakeholders involved.</p>
                    </div>
                    <img src={img2} className="prob-img2 right-img-effect" />
                </div>
            </div>
            <div className="about-goals-box">

                <div className="status fade-effect">
                    <h1 className="status-header fromtop-anim" style={{ "color": " rgb(19, 227, 19)" }}>Current Status</h1>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">Factory items with 3D models for 360° viewing</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">Photorealistic 3D models for immersive experiences.</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">360° viewer for detailed inspection of equipments, manchinaries, and moving objects.</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">Explore items in your space using augmented reality.</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">Augmented reality for on-site planning and engineering.</p></div>
                </div>
                <div className="status fade-effect">
                    <h1 className="status-header fromtop-anim" style={{ "color": "rgb(9, 16, 250)" }}>Future Goals</h1>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={archery} className="fromtop-anim" /><p className="status-points fromtop-anim">Build an engineering platform for providing an immersive planning experience.</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={archery} className="fromtop-anim" /><p className="status-points fromtop-anim">Make the products interactive in a real environment rather than just demonstrating static
                        3D models using ML-AI.</p></div>

                </div>

            </div>
        </>

    );
};

export default About;
