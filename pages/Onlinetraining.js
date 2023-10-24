import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './OnlineTraining.module.css';

function OnlineTraining() {
  return (
    <div>
      <Header />
      <div className="content">
        <h1>Online Training</h1>

        <div className="course">
          <h2>AI/Data Science</h2>
          <p>
            Our AI/Data Science online training program equips you with the skills and knowledge required to excel in the fields of artificial intelligence and data science. You'll learn to harness the power of data to make informed decisions, build predictive models, and develop intelligent systems. This program includes hands-on projects, real-world applications, and personalized guidance to help you become a data science expert.
          </p>
        </div>

        <div className="course">
          <h2>IoT with Data Science and AI</h2>
          <p>
            Dive into the world of IoT with our comprehensive online training course. Explore the intersection of the Internet of Things, data science, and artificial intelligence. Learn to collect and analyze data from IoT devices, implement machine learning models, and create intelligent IoT solutions. This program is perfect for individuals looking to leverage IoT and cutting-edge technologies for innovative projects and applications.
          </p>
        </div>

        <div className="course">
          <h2>Database Administration</h2>
          <p>
            Our online training in Database Administration will provide you with the expertise needed to manage and secure data infrastructure effectively. Learn the principles of database design, optimization, and maintenance. Gain hands-on experience in managing and securing databases, ensuring data integrity, and optimizing performance. This program is suitable for beginners and experienced professionals alike.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OnlineTraining;
