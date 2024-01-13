import express from 'express';

const app = express()

app.get('/admin', (req, res) => res.send('Obteniendo DataForms'))
app.post('/admin', (req, res) => res.send('Creando DataForms'))
app.put('/admin', (req, res) => res.send('Actualizando DataForms'))
app.delete('/admin', (req, res) => res.send('Borrando DataForms'))

app.listen(3000)
console.log("Servidor anda en el 3000")