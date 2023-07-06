import { AppProvider } from './providers/app.provider';
import AppRouter from './routes';

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
