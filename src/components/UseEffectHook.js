import { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Başlık");

  useEffect(() => {
    console.log("Component Doğdu", title, count);
  }, []);

  useEffect(() => {
    console.log("Componentte Count Güncellendi", count);
  }, [count]);
  useEffect(() => {
    console.log("Componentte Title Güncellendi", title);
  }, [title]);

  useEffect(() => {
    console.log("Componentte Herhangi Bir State Güncellendi");
  });

  const Arttir = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <h1>{title}</h1>
      <button
        onClick={() => {
          title === "Başlık"
            ? setTitle("Değiştirilmiş Başlık")
            : setTitle("Başlık");
        }}
      >
        Başlık Değiştir
      </button>
      <button onClick={() => {setCount(count - 1);}}>-1</button>
      <button onClick={Arttir}>+1</button>
    </>
  );
}

export default UseEffectHook;
