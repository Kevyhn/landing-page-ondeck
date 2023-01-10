import './App.css';
import React, {useState} from 'react';
import { Modal } from './components/Modal';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import Logo from './Assets/Logo.svg';
import Menu from './Assets/Menu.svg';
import Capterra from './Assets/Capterra Logo.svg';
import AlternativeTo from './Assets/AlternativeTo Logo.svg';

function App() {

  const [modal, setModal] = useState(false);

  const mouseOver = () => setModal(true);

  const mouseLeave = () => setModal(false);

  const openMenu = () => setModal(true);

  return (
    <div className="App">
      <main className="main">
        <header className="header">
          <div className="logo">
            <img src={Logo} alt="Logo"/>
            {modal}
          </div>
          <ul className="items">
            <li onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Products</li>
            <li>Challenges</li>
            <li>Resources</li>
            <li>Other Links</li>
          </ul>
          <div className="register">
            <span>Sign in</span>
            <Button/>
          </div>
          <div className="menu-btn" onClick={openMenu}>
            <img src={Menu} alt="menu"/>
          </div>
        </header>
        <Modal modal={modal} setModal={setModal}/>
        <div className="content">
          <div className="hero-img">
            <img src={require('./Assets/Hero Image.png')} alt="image"/>
          </div>
          <div className="hero">
            <h1>Ondeck is your remote<b className="yellow"> conference calling tool</b></h1>
            <p>Ondeck is a service that allows you to create beautiful, online, and encrypted video calls for your remote team</p>
            <Button/>
            <div className="rating">
              <h4>5.0 Rating based on reviews from:</h4>
              <div className="icons">
                <img src={Capterra} alt="Capterra"/>
                <img src={AlternativeTo} alt="AlternativeTo"/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  );
}

export default App;