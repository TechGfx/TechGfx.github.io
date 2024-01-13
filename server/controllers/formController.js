import pool from '../db.js'

const submission = (req, res) => {
    const formData = req.body;
    const { name, password } = formData;

    const sqlQuery = `
            INSERT INTO users (name, password)
            VALUES (?, ?)
        `
    const values = [name, password]

    pool.query(sqlQuery, values, (err, result) => {
        if (err) {
            console.error("error: ", err)
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(result)
        }
    })
}

export default {
    submission,
}