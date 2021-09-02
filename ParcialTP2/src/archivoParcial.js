import fs from 'fs'

const aPagos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
   ]

   function imprimirClienteImporte(array){
       array.forEach(p => {
           console.log('Cliente: ' + p.cliente + '. Importe: ' + p.importe)
       });
   }

   function ordenarPorCliente(array){
       const arrayOrdenado = array.sort((clienteA, clienteB) => clienteA.importe - clienteB.importe)
       console.log(arrayOrdenado)
       //ordeno por importe utilizando sort, no logre ordenar por Cliente
   }

   function filtrarClientesConR(array){
       const arrayFiltrado = array.filter(cliente => cliente.cliente.charAt(0) == 'R')
       console.log(arrayFiltrado)
   }

   function aumentarTreintaPorciento(array){
       let num = 0
       const arrayAumentado = array.map(cliente => (cliente.importe + cliente.importe*30/100))
       array.forEach(a => {
           a.importe = arrayAumentado[num]
           num ++
       });
       console.log(array)
   }

   function mensajeConTimer(){
       setTimeout(() => {console.log('Mensaje luego de 7 segundos iniciado el codigo.')}, 7000)
   }

   function leerDatosAsincronico(){
    const data = fs.readFileSync('/Users/bulia/Downloads/datos.txt', 'utf-8')
    console.log(data)
   }

   imprimirClienteImporte(aPagos)
   ordenarPorCliente(aPagos)
   filtrarClientesConR(aPagos)
   aumentarTreintaPorciento(aPagos)
   mensajeConTimer()
   leerDatosAsincronico()