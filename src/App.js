import { useState } from 'react'

function App() {
    const [color, setColor] = useState('');
  
  return (
    <div className='colorBoxParent'>
        <div className='colorBox' style={{backgroundColor: color}}>
          <p className='colorName' style={{color: color!==''?color:"white"}}>{color===''?'Empty value':color}</p>
        </div><br/>
        <input className='colorText' type="text" id="txtColor" value={color} 
               placeholder='Enter color name' onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}

export default App;
