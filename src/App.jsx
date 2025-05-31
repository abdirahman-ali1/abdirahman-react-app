import './App.css'
import Greeting from './components/Greeting';
import Header from './components/Header'
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header></Header>
      <Greeting name="Abdirahman" surname="Ali"></Greeting>
      <Counter />
    </>
  );
}

export default App
