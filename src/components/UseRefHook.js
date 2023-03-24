import { useRef } from "react"



function UseRefHook() {

    const renkDegisimi = useRef();
    const handleChange = () =>{
        document.body.style.backgroundColor = renkDegisimi.current.value;
    }
  return (
    <div>
        <p>Inputa renk girin </p>
        <input type="text" ref={renkDegisimi} onChange={handleChange}/>
    </div>
  )
}

export default UseRefHook