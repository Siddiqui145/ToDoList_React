import React from 'react';

const Error = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>The page you are looking for does not exist.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    padding: '0 20px',
  },
  heading: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#dc3545',
  },
  text: {
    fontSize: '24px',
  },
};

export default Error;
