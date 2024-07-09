import React from 'react';
import { useSelector } from 'react-redux';
import Maincontent from '../props/Maincontent';
import Counter from '../props/Counter';

const Home = () => {
  const theme = useSelector((state) => state.theme);

  const heroStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '5px',
  };

  return (
    <div style={heroStyle}>
      <Maincontent
        title="Selamat datang"
        subtitle="Klik About untuk menampilkan Nama dan NIM"
        buttonText="Selesaikan Tugas Ini"
      />
      <Counter />
    </div>
  );
};

export default Home;
