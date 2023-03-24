import { useState } from 'react'

function UseStateHook() {
    const [theme,setTheme] = useState('light');
    
  return (
    <div className={theme}>
      <h1>{theme}</h1>
      <button onClick={()=>{theme==='light'?setTheme('dark'):setTheme('light')}}>Change Theme</button>
    </div>
  )
}

export default UseStateHook