import './App.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cupco test WebServer</h1>
        <p>Get ready to experience a unique coffee!</p>
      </header>
      <main className="App-content">
        <section className="App-section">
          <h2>About</h2>
          <p>This is a papercup, a papercup to captivate your imagination.</p>
        </section>
        <section className="App-section">
          <h2>Contact</h2>
          <p>Feel free to reach out to us for any inquiries or feedback.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2023 Cupco. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
