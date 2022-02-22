const express = require('express')
const connectDB = require('./config/db')

const app = express()
// connect database
connectDB()

// init middleware
app.use(express.json({extended:false}))

app.get('/', (req, res) => {
    res.send('API Running')
})

// define router
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/instance', require('./routes/api/instance'))
app.use('/api/group', require('./routes/api/group'))
// app.use('/api/profil', require('./routes/api/profil'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening port ${PORT}`));