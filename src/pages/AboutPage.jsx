import Mahdi from '../assets/Mahdi.jpg'
import Footer from '../components/footer'
export default function About() {
    return (
      <div className="container pt-4 aboutMeContainer">
        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Mahdi Mohammadi</h3>
                  <img src={Mahdi} className="img-fluid" alt="me"/>
                  <p className="lead mb-0 titleRes">
                    Full stack Developer
                  </p>
                </div>
              </div>
              <div className="col-lg-4 educationresume">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Education:</h3>
                  <p className="lead mb-0">
                    B.sc industrial engineering
                  </p>
                  <p className="lead mb-0">
                    Full stack coding bootcamp
                  </p>
                </div>
              </div>
              <div className="col-lg-4 skillResum">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3> Skills</h3>
                  <ul className="list-unstyled">
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>Express</li>
                    <li>Mysql</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </section>
    </div>
    );
  }
  