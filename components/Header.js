import React from "react";
 
import { useRouter } from 'next/router';
 
import Icon from '../components/Icon';
 
import styles from './Header.module.css';
 
 
 
 
function Header() {
 
  const router = useRouter();
 
 
 
 
  const handleCourseChange = (event) => {
 
    const selectedCourse = event.target.value;
 
    if (selectedCourse) {
 
      if (selectedCourse === 'ai-data-science-full-stack') {
 
        router.push('/Aidata');
 
      } else if (selectedCourse === 'iot-data-science-ai') {
 
        router.push('/Iot');
 
      } else if (selectedCourse === 'database-administration') {
 
        router.push('/Database');
 
      }
 
    }
 
  };
 
 
 
 
  return (
 
    <div>
 
      <p className={styles.p1}>Our best offer ever!! Summer special - Get 3 Courses at 22499/- only. Read More</p>
 
      <div className={styles.icon}>
 
        <p>Email: edhadigitalservices@gmail.com</p>
 
        <p>Contact: +91 8884440466</p>
 
        <div className={styles.icons}>
 
          <Icon />
 
        </div>
 
      </div>
 
      <nav className={styles.part1}>
 
       
 
          <img src="/lo.png" alt="Your Logo" className={styles.logo} />
          <div>
          <p onClick={() => router.push('/')}>Home</p>
 
          <p onClick={() => router.push('/About')}>About</p>
 
          <p onClick={() => router.push('/online-training')}>Online Training</p>
 
         
 
          <p>
 
            <button
 
              style={{ color: 'black', backgroundColor: 'aquamarine', borderRadius: '600px' }}
 
              id="clc"
 
              onClick={() => router.push('/Enquiry')}
 
            >
 
              Enquiry
 
            </button>
 
          </p>
 
          <p>
 
            <select onChange={handleCourseChange} style={{ width: '80px', marginLeft: '20px' }}>
 
              <option value="">Course</option>
 
              <option value="ai-data-science-full-stack">AI/Data Science and Full Stack Development</option>
 
              <option value="iot-data-science-ai">IoT with Data Science and AI</option>
 
              <option value="database-administration">Database Administration</option>
 
            </select>
 
          </p>
 
        </div>
 
      </nav>
 
    </div>
 
  );
 
}
 
 
 
 
export default Header;