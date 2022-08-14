const pool = require('../config/database')


//POST a new student(creating student details)
const addStudent = (req,res) => {
    const {name, email, cell_phone, course} = req.body;  //initializing our values.
    pool.query(
        'INSERT INTO student (name, email, cell_phone, course VALUES($1, $2, $3, $4) RETURNING id',  //the database arranges for ID's automatically.
        [name, email, cell_phone, course],
        (error, results) =>{
            if(error){
                throw error
            }
            res.status(201).send(`student added with ID: ${results.rows[0].id}`)
        }
    )
}
module.exports = {addStudent}
