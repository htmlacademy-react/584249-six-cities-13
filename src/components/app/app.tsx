import MainPage from '../../pages/main/main-page';

type AppMainProps = {
  offersCount: number;
}

function App({offersCount}: AppMainProps): JSX.Element {
  return (
    <MainPage offersNumber={offersCount}/>
  );
}

export default App;
