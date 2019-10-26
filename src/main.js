const expres = require('express')


const app = expres();

app.set('port', process.env.PORT || 3000)

app.use('/user', (req, res) => {
    res.json({messaje:'Enviando Mensaje utilizando jenkins'})
})


app.listen(app.get('port'), ()=> {
    console.log(`Server on Port ${app.get('port')}`);
})