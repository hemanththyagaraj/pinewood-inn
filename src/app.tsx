import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'routes';
import GlobalStyles from 'styles/gobal';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
