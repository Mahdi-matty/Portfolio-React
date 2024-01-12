import Mahdi from '../assets/Mahdi.jpg'
import Footer from '../components/footer'
export default function About() {
    return (
      <div className="container pt-4">
        <p>
        <hr></hr>
        </p>
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
                   full stack coding bootcamp
                   </p>
                </div>
              </div>
              <div className="col-lg-4 skillResum">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3> Skills</h3>
                  <p className="lead mb-0">
                    React
                  </p>
                  <p className="lead mb-0">
                    NodeJs
                  </p>
                  <p className="lead mb-0">
                    Express
                  </p>
                  <p className="lead mb-0">
                    Mysql
                  </p>
                  <p className="lead mb-0">
                    mongoDB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </section>
        
      </div>
    );
  }
  