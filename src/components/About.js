import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#D7FF33',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

function About() {
  return (
    <div style={styles.card} id="aboutme">
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        I am Eric who did not have any backgrounds of coding knowledge before joining this bootcamp. Coding is hard but at the same time fun as it requires a lot of trying and efforts in between. I am seeking a chance to enter the coding world after the bootcamp and this page is an area for me to save the works I had done.
      </div>
    </div>
  );
}

export default About;
