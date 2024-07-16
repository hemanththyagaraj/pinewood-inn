import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppRouter from 'routes';
import GlobalStyles from 'styles/global';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { StyleSheetManager } from 'styled-components';

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
        <StyleSheetManager shouldForwardProp={() => true}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <ToastContainer hideProgressBar autoClose={3000} />
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </StyleSheetManager>
      </QueryClientProvider>
    </>
  );
}

export default App;
