import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>      

            <div class="main">
                <div class="accessible">
                    <Link to="/"><p class="button-text">Home</p></Link>
                    <Link to="/login"><p class="button-text">Login</p></Link>
                    <Link to="/signup"><p class="button-text">Sign Up</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;