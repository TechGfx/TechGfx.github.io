import mysql from 'mysql'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'id21775042_admisadb',
    password: 'Admisadb12345###',
    database: 'id21775042_admisa_db',
    port: '4000'
})

export default pool;