import logo from '../../assets/Logo/Cyberus_hor.png'

function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      backgroundColor: '#FFF',
      padding: 8,
      color: 'white' 
    }}>
      <img src={logo} alt="Logo" style={{ width: '200px', height: '50px', marginLeft: '10px'}} />
    </header>
  );
}

export default Header;

  