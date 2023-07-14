import { useState } from "react"

function Appex2() {
  /*Ex2 (React)
  Implementare un'App in cui abbiamo due input di tipo "number" che possono oscillare tra 1 e 10, e rappresentano i voti di due studenti, mario rossi e luigi verdi. Al trascinamento degli slider i rispettivi contatori reattivi si modificano nel layout. Ad ogni "movimento" di uno dei 2 slidere, un div cita:
  se voto mr > voto lv
  "mario rossi è in vantaggio"
  se voto mr < voto lv
  "luigi verdi è in vantaggio"
  se voto mr = voto lv
  "mario rossi e luigi verdi sono pari"
  Inizialmente, i due slider sono settati entrambi al valore 3, pertanto, all'avvio dell'app viene mostrato il terzo messaggio.
  Puoi usare i ref oppure lo state per la realizzazione del progetto.
  */

  const [mario, setMario] = useState('3')
  const [luigi, setLuigi] = useState('3')
  
  function messages(par, par1){
    if(par > par1){
      return("mario rossi è in vantaggio")
    }
    if(par < par1){
      return("luigi verdi è in vantaggio")
    }
    if(par == par1){
      return(  "mario rossi e luigi verdi sono pari")
    }
  }
  return (
    <main className="flex flex-col items-center gap-11 h-screen">
      <header className="w-screen p-5 bg-red-400 text-center text-3xl ">Confronta Voti</header>
      <div className="flex gap-6 mt-36">
        <div>
          <label htmlFor="mario">Mario Rossi: </label>
          <input id='mario' onInput={(e) => setMario(e.target.value)} type="number" value={mario} min='1' max='10' className=" w-32 border border-slate-500" />
        </div>
        <div>
          <label htmlFor="luigi">Luigi Verdi: </label>
          <input onInput={(e) => setLuigi(e.target.value)} id='luigi' type="number" min='1' max='10' value={luigi} className=" w-32 border border-slate-500" />
        </div>

      </div>
      <div className="flex gap-9">
        <span>
          Il voto di Mario Rossi é: {mario}
        </span>
        <span>
          Il voto di Luigi Verdi é: {luigi}
        </span>
      </div>
      <div>
        {messages(mario, luigi)}
      </div>
    </main>

  )
}

export default Appex2
