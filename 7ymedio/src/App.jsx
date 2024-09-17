import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const cartas= [
  { valor: 1, nombre: 'As' },
  { valor: 2, nombre: '2' },
  { valor: 3, nombre: '3' },
  { valor: 4, nombre: '4' },
  { valor: 5, nombre: '5' },
  { valor: 6, nombre: '6' },
  { valor: 7, nombre: '7' },
  { valor: 0.5, nombre: 'Sota' },
  { valor: 0.5, nombre: 'Caballo' },
  { valor: 0.5, nombre: 'Rey' },
];
function App() {
  const [cartaAleatoria, setCartaAleatoria] = useState(0)
  const [puntaje, setPuntaje] = useState(0)
  const [banca, setBanca] = useState(0)

  const turnoBanca = () => {
    const cartaBanca = Math.floor(Math.random() * cartas.length);
    setBanca(cartas[cartaBanca]);
  };
  
  const pedirCarta = () => {
    const carta= Math.floor(Math.random()*cartas.length)
    const cartaGenerada = cartas[carta]
    setCartaAleatoria(cartaGenerada)
    const nuevoPuntaje = puntaje + cartaGenerada.valor;
    setCartaAleatoria(cartaGenerada);
    setPuntaje(nuevoPuntaje);
    if (nuevoPuntaje > 7.5) {
      alert('El valor de tus cartas ha pasado el 7 y medio. Perdiste.');
      setPuntaje(0); 
      setCartaAleatoria(0)
    } else {
      setCartaAleatoria(cartaGenerada);
      setPuntaje(nuevoPuntaje);
    }
 
  };

  const planto = () => {

  };

  return (
    <>
   <h1>7 y medio</h1>
   <p>Valor de la banca: {banca.valor} </p>
   <div>
    <p>Carta: {cartaAleatoria.nombre} </p>
    <p>Valor: {cartaAleatoria.valor} </p>
   </div>
   <div>
        <p>Total acumulado: {puntaje}</p>
      </div>
   <button onClick={pedirCarta}>Pedir una carta</button>
   <button onClick={planto}>Me planto</button>
    </>
  )
}

export default App
