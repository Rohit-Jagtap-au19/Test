import './App.css';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Gallery />
    </div>
  );
}

export default App;
