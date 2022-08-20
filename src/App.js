import { useRef } from 'react';
import Input from "./components/Input";

function App() {
  const email = useRef()
  const password = useRef()

  return (
    <>
      <Input ref={email} title="E-mail" type="text" />
      <Input ref={password} title="Password" type="password" />
      <button onClick={() => console.log(email.current)}>save</button>
    </>
  );
}
export default App;