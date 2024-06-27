import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRouter from 'routes';
import GlobalStyles from 'styles/gobal';

import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ToastContainer hideProgressBar autoClose={3000} />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
