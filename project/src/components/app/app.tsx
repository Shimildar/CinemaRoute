import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'const/enums';
import Main from 'pages/main/main';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<Main />}
      />
    </Routes>
  );
}

export default App;
