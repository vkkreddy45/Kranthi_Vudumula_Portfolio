import java from "../assets/img/java.png";
import python from "../assets/img/python.jpg";
import MySQL from "../assets/img/MySql.png";
import Oracle from "../assets/img/Oracle.png";
import AWS from "../assets/img/AWS.jpg";
import Html from "../assets/img/Html.png";
import Css from "../assets/img/Css.png";
import JS from "../assets/img/JS.png";
import ReacT from "../assets/img/ReacT.png";
import Nodej from "../assets/img/Nodej.png";
import Postman from "../assets/img/Postman.png";
import rest from "../assets/img/rest.png";
import boot from "../assets/img/boot.png";
import json from "../assets/img/json.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="containerss">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With a comprehensive command over front-end and back-end technologies,<br></br> I'm a Full Stack Developer adept at crafting robust, scalable solutions,<br></br> enhancing user interactions through innovative design and seamless functionality.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer">
                                <img src={python} alt="Image" />
                                </a>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                            <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
                                <img src={java} alt="Image" className="hoverable_image" />
                                </a>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
                                <img src={MySQL} alt="Image" />
                                </a>
                                <h5>MySQL</h5>
                           </div>
                            <div className="item">
                                <img src={Oracle} alt="Image" />
                                <h5>Oracle</h5>
                            </div>
                            <div className="item">
                                <img src={AWS} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={Html} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={Css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={JS} alt="Image" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={ReacT} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={Nodej} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={Postman} alt="Image" />
                                <h5>PostMan</h5>
                            </div>                    
                            <div className="item">
                                <img src={boot} alt="Image" />
                                <h5>SpringBoot</h5>
                            </div>
                            <div className="item">
                                <img src={rest} alt="Image" />
                                <h5>Rest</h5>
                            </div>
                            <div className="item">
                                <img src={json} alt="Image" />
                                <h5>Json</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    
        <img className="background-image-left" src={colorSharp} alt="Image" />
        <div class="main">
            <h3 class="head">Experience</h3>
            <div class="container">
                <ul className="expboxes">
                    <li>
                        <h3 class="heading">CibertsAI</h3>
                        <p>As a versatile developer, I crafted and implemented Python Flask ReactJS chatbots with a keen focus on optimizing conversational flows to elevate user experiences. My responsibilities extended to the comprehensive management, analysis, and deployment of these chatbots on the Azure Cloud, showcasing my proficiency in delivering efficient cloud-based solutions. This experience reflects my commitment to creating seamless and user-centric chatbot interactions within the dynamic landscape of web development.</p>
                        <a href="https://drive.google.com/file/d/1yM95PgO6q_db8RtzbNhHJMUVxnHlpxJ7/view?usp=sharing" target="_blank">Read More </a>
                        <span class="date">Nov 2023-Present</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">University of Oklahoma</h3>
                        <p>Led a neurotechnology exploration project leveraging the cutting-edge Ultra Cortex Mark IV headset, employing OpenBCI GUI to meticulously analyze and collect brain frequency data based on eye states. Spearheaded the creation of a robust Machine Learning model to validate data accuracy, implementing sophisticated classification algorithms. Achieved remarkable results with a 95% accuracy rate using KNN, showcasing prowess in neurotechnology, data analysis, and machine learning. This experience underscores my commitment to pushing boundaries in understanding and advancing brain-computer interface technology.</p>
                        <a href="https://drive.google.com/file/d/1yM95PgO6q_db8RtzbNhHJMUVxnHlpxJ7/view?usp=sharing" target="_blank">Read More </a>
                        <span class="date">Aug 2022-present</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">University of Oklahoma Health Science Center</h3>
                        <p>As a Data Analyst in OUHSC, I leveraged Cut and Run Pipelines in data analysis, employing libraries like FastQC, Trimmomatic, Samtools, and Star for comprehensive processing and peak detection within datasets. Applied advanced statistical techniques to discern significant peaks and patterns in diverse genomic features such as transcription factor binding and histone modifications. This analytical approach provided valuable insights into the intricate landscape of genomic data, contributing to a deeper understanding of biological processes. </p>
                        <a href="https://drive.google.com/file/d/1yM95PgO6q_db8RtzbNhHJMUVxnHlpxJ7/view?usp=sharing#" target="_blank">Read More </a>
                        <span class="date">Jun 2022-Aug 2022</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">University of Oklahoma</h3>
                        <p>Drove efficiency in data processing by developing Python scripts for converting PDF data to Excel, incorporating automated checks for validation and data integrity enhancement. Further optimizing data compatibility and exchange, transformed Excel data into Diggs Format (XML) through custom Python scripts. The resulting Diggs XML files seamlessly integrated into the ARCGIS mapping system, elevating spatial visualization and accessibility of geographic data. This streamlined workflow reflects my commitment to data accuracy and proficiency in data manipulation for enhanced mapping capabilities.</p>
                        <a href="https://drive.google.com/file/d/1yM95PgO6q_db8RtzbNhHJMUVxnHlpxJ7/view?usp=sharing" target="_blank">Read More </a>
                        <span class="date">Jan 2022-May 2022</span>
                        <span class="circle"></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
