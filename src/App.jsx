import './App.css'
import Greeting from './components/Greeting';
import Header from './components/Header'
import { Tiriye } from './components/Counter';
import ThemeToggle from './components/ThemeSwitcher';
import Clicker from './components/clicker';
import Inputer from './components/Inputer';
import WelcomeMessage from './components/WelcomeMessage';
import Dashboard from './components/Dashboard';
import Notification from './components/Notification';


function App() {
  return (
    <>
      <ThemeToggle />
      <Header></Header>
      <Dashboard isLoggedIn={true} />
      <Notification hasNewMessage={true}/>
      <Inputer />
      <Greeting name="Abdirahman" surname="Ali"></Greeting>
      <WelcomeMessage isloggedIn={true} />
      <Clicker />
      <Tiriye />
    </>
  );
}

export default App
