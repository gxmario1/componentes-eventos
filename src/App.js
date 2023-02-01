import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Btn from './components/Button';

function App() {
        const [BtnStatus, setBtnStatus] = useState(false);
        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(false);
        const [message, setMessage] = useState('');
        
        const evalInputContent = () => {
          if ((name.length > 0) && (password.length > 0)){
              setBtnStatus(true);
           }else{
              setBtnStatus(false);
           }
         }
        const handleSubmit = (e) => {
        e.preventDefault();
        setError(true);
           if(name == 'ADL' && password == '252525'){
            
            setMessage('Los datos son correctos');
           }else{
            setMessage('Los datos son incorrectos');
            }
         }
         
  return (
  <div className="app container bg-white p-4 w-50 rounded">
      <h2 className='text-center'>Estado de los componentes y eventos</h2>
      {error && <div class="alert alert-primary text-center" role="alert">{message}</div>}
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nombre</label>
        <div> <input type='text' onChange= {(e) => {setName(e.target.value); evalInputContent();}} id='name' defaultValue={name} className='form-control mt-1 mw-100'></input></div>
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <div> <input type='password' id='password' defaultValue={password} onChange={(e) =>{setPassword(e.target.value); evalInputContent(); }} className='form-control mt-1 mw-100'></input></div>
      </div>
      <div className='mt-4'>{BtnStatus && <Btn text="Iniciar sesion" />}</div>
    </form>
  </div>
    
  );
}

export default App;
