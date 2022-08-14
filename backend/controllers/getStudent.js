const pool = require('../config/database')
//GET a single student by id
const getStudentById = (req,res) => {  //declarring the students ID by calling id GetstudentById (because we want to get students from the database by ID)
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM student WHERE id = $1',[id], (error,results) =>{  //pool.query parse an incoming request (so we gonna pass what we selected)
        if (error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}
module.exports = {getStudentById}
