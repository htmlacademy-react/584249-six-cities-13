import style from './loading.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className='container'>
      <p className={style.loading__spinner}>Loading ...</p>
    </div>
  );
}

export default LoadingScreen;
