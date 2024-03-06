import Footer from '../components/footer'
import Salut from '../assets/salut.png'
import Weather from '../assets/Weather.png'
import WorkCalender from '../assets/WorkCalender.png'
import Quiz from '../assets/Quiz.png'
import Brilla from '../assets/Brillascreen.png'
export default function Protfolio() {

    return (
        <div className="container pt-4 bigAssContain">
          <ul className="list-group list-group ulImg">
            <li>
              <a href='https://salut-2-d1e41c6b2557.herokuapp.com/'>
                Salut
              <img src={Salut} ></img>
              </a>
            </li>

             
            <li>
              <a href='https://mahdi-matty.github.io/Open-Weather/'>
                Weather Forcast
              <img src={Weather} ></img>
              </a>
            </li>
           
            <li>
              <a href='https://mahdi-matty.github.io/Work-Day/'>
                Office Calender
              <img src={WorkCalender} ></img>
              </a>
            </li>
          
            <li>
              <a href='https://mahdi-matty.github.io/code-Qiez/'>
                Take a Quiz
              <img src={Quiz} ></img>
              </a>
            </li>
            <li>
              <a href='https://brillamentee.netlify.app'>
                Learn by flashcards
              <img src={Brilla} ></img>
              </a>
            </li>
          </ul>
        </div>
        
      );
    }