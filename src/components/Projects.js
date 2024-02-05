import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-image1.png";
import projImg2 from "../assets/img/project-image2.png";
import projImg3 from "../assets/img/project-image3.png";
import projImg4 from "../assets/img/project-image4.jpg";
import projImg5 from "../assets/img/project-image5.png";
import projImg6 from "../assets/img/project-image6.jpeg";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import { Button} from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Health Bot",
      description: "Revolutionized healthcare with the development of a Health Bot, streamlining data visualization and empowering users with actionable insights. Seamlessly integrated predictive heart disease risk assessment, providing real-time probability assessments for personalized health awareness. Enhanced healthcare decision-making and transformed user engagement, contributing to a more proactive and informed approach to well-being. #Python #Azure #React #MySQL",
      imgUrl: projImg1,
    },
    {
      title: "Crop Yield Prediction",
      description: "Transformed agriculture sector with the creation of a Crop Yield Prediction tool, providing farmers with a powerful web application to optimize harvest planning. Led the development of predictive models employing advanced algorithms, ensuring accurate yield forecasts. The application, built using HTML, CSS, and JavaScript, empowers farmers to make data-driven decisions, enhancing crop management and contributing to sustainable farming practices. #Machine Learning #Python #Flask #Javascript",
      imgUrl: projImg2,
    },
    {
      title: "Fractals",
      description: "Learned cloud deployment with an innovative project centered around fractals. Successfully deployed web pages on GCP, utilizing Git for automation, and harnessed the power of Python and Docker scripts from Bit Buckets to generate intricate fractal patterns. Demonstrated the versatility of cloud computing tools, highlighting the creative potential in deploying and showcasing visually stunning fractals. # Python #Google Cloud #Docker",
      imgUrl: projImg3,
    },
    {
      title: "Covid Tracker Application",
      description: "The app helps in spreading awareness on the surge in covid cases, percentage of recovery , and primary symptoms by which the public can predict if one is infected. Using API the data is retrieved into the application developed by flutter with the pleasing visuals to the public and a flexibility to access global statistics, symptoms the public should be aware of. #Flutter #Dart #API",
      imgUrl: projImg4,
    },
    {
      title: "Redactor and Un-Redactor",
      description: "Restructured text analytics with the creation of a dynamic Redactor and Un-Redactor application, providing a cutting-edge solution for handling classified information in text files. Enabled efficient blackout of sensitive details like names, addresses, and dates, ensuring data privacy and integrity. Collaborated on intuitive interfaces for seamless user experiences, empowering professionals in the text analytics sector to process and analyze large volumes of data securely. #GCP #NLP #Python",
      imgUrl: projImg5,
    },
    {
      title: "Cuisine Predictor",
      description: "Introduced Cuisine Predictor, a groundbreaking machine learning project designed for culinary enthusiasts. Users experience a seamless journey of discovering delectable recipes by simply inputting available ingredients. The application predicts the top five cuisines tailored to the ingredients and assigns recommendation scores, empowering users to explore diverse culinary delights effortlessly. #Python #GCP #NLP",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Showcasing Innovation Through Action"<br></br> Venture into a collection of projects that encapsulate my professional journey, each a unique blend of innovation, skill, and determination.<br></br> This section showcases my ability to transform abstract ideas into tangible results, demonstrating my passion and competency in my field.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">General-Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">SpringBoot</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Django</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h1>SPRING BOOT-Insurance Management System</h1>
                      <p>As a junior software developer, I leveraged my skills in Spring Boot to design and develop a user-friendly and robust Football Leaderboard Application. This project allowed me to further explore my proficiency in the Spring Boot framework and enhance my understanding of its functionalities. I took responsibility for key aspects of the project, demonstrating not only technical acumen but also problem-solving abilities and an understanding of user experience principles.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h1>GATOR HOME QUEST</h1>
                      <Container className="d-flex justify-content-center">
                <a href="https://gatorshomequest.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">Check Out Website</Button>
                </a>
            </Container>
                      <p>As part of Human Computer Interaction project we designed the website using technology #Django to provide ease to newbies in the city of Gainesville find and explore all the better places to live. It helps to identify all the quantifiers which user would look for like costs, maintainance, and amenities. Provided with wishlist helps the user to maintain record of all the houses they desired to live in. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
