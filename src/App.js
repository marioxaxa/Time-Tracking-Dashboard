import './App.css';

const Box = () => {
  return (
    <div>
    <div className='Box-top'></div>
    <div className='Box-bottom'>
      <div className='Box-type'>
        <p>Type</p>
        <div>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/>
          </svg>
        </div>
      </div>
      <div className='Box-time'>
        <p>Xhrs</p>
      </div>
      <div className='Box-past'>
        <p>Ultima Semana - Xhrs</p>
      </div>
    </div>
  </div>
  )
}


function App() {
  return (
    <div className="App">
      <div className='Grid'>
        <div>
          <div className='Box-top' id='Profile-top'></div>
          <div className='Box-bottom' id='Profile-bottom'></div>
        </div>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default App;
