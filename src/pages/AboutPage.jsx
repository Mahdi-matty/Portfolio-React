import Mahdi from '../assets/Mahdi.jpg'
import Footer from '../components/footer'
export default function About() {
    return (
      <div className="container pt-4 aboutMeContainer">
        <section className="features-icons bg-light text-center m-4">
          <div className="features-icons-icon d-flex picContainer">
                  <img src={Mahdi} className="img-fluid" alt="me" />
          </div>
          <div className='restOfContainer'>
            <div className="container detailContainer">
                            <h3>Mahdi Mohammadi</h3>
                            <p className="lead mb-0 titleRes">Full stack Developer</p>
            </div>
                        <hr/>
            <div className="col-lg-8 eduandskillContainer">
                <div className="col-lg-12 educationresume">
                                <h3>Education:</h3>
                                <p className="lead mb-0">B.sc industrial engineering</p>
                                <p className="lead mb-0">Full stack coding bootcamp</p>
                </div>
                <div className="col-lg-12 skillResum">
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
          
      </section>
    </div>
    );
  }
  