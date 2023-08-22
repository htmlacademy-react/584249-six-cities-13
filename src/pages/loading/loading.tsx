const styles = {
  'loading-spinner': {
    position: 'absolute',
    top: '50%',
    left: '50%',
  }
};

const style = styles['loading-spinner'];

function LoadingScreen(): JSX.Element {
  return (
    <div className='container'>
      <p style={style}>Loading ...</p>
    </div>
  );
}

export default LoadingScreen;
