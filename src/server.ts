import app from './app'

app.listen(process.env.PORT, () => {
  console.log(`Server 🚀 on port ${process.env.PORT}`)
})