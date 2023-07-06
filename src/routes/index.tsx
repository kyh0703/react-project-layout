import { useRoutes } from 'react-router-dom';

import { Router } from './route';

const AppRouter = () => {
  const element = useRoutes([...Router]);
  return <>{element}</>;
};

export default AppRouter;
