import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaBriefcase} from 'react-icons/fa'
export default function Resume() {

    return (
      <motion.div 
      className='resumePageDev'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <VerticalTimeline className='verticalLine' >
        <div className="container pt-4" >
          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="06/2022 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaBriefcase />}
              >            
                <motion.p 
                className="vertical-timeline-element-subtitle"
                  style={{ display: 'flex', alignItems: 'center' }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >Self-Employed construction</motion.p>            
              </VerticalTimelineElement> 
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="09/2018 - 05/2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaBriefcase />}
              >
                <motion.p 
                className="vertical-timeline-element-subtitle"
                  style={{ display: 'flex', alignItems: 'center' }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >English Teacher at World Language Center Dushanbe</motion.p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="10/2020 - 11/2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaBriefcase />}
              >            
                <motion.p 
                className="vertical-timeline-element-subtitle"
                  style={{ display: 'flex', alignItems: 'center' }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >junior Web developer Karwan, zoodfood, mudh</motion.p>            
              </VerticalTimelineElement> 
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaBriefcase />}
              >
            <motion.p 
            className="vertical-timeline-element-subtitle"
                style={{ display: 'flex', alignItems: 'center' }}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >Project Manager Afghanite Geomining, Kabul</motion.p>
           
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="10/2015 - 03/2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaBriefcase />}
              >
                    <motion.p 
                    className="vertical-timeline-element-subtitle"
                      style={{ display: 'flex', alignItems: 'center' }}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >Project Manager Greentech, Kabul</motion.p>               
              </VerticalTimelineElement>      
        </div>
        </VerticalTimeline>
    </motion.div>
      );
    }