import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Pages/HomePage/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PageHeader } from './layout/PageHeader/PageHeader';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageHeader />
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
