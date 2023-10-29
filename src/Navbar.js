import './navbar.css'
function Navbar(){
    return (
        <div className="navbar">
            <div class="logo">
                <img src='https://w7.pngwing.com/pngs/831/155/png-transparent-game-react-native-javascript-android-physics-symmetry-web-application-vuejs-thumbnail.png' alt='Your Logo' />
            </div>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <button class="cta-button">Get Started</button>

        </div>
      );
}

export default Navbar;