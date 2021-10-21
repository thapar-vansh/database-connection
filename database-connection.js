import pg from 'pg'
const { Pool } = pg

const CONFIG = {
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  max: 100,
}

const pool = new Pool(CONFIG)
pool
    .connect()
    .then((client) => {
       console.log('Database Connected')
       client.release()
    })
    .catch((err)=> 
    console.log(err))

