const pool = require('../config/database')

//GET All students in the database
const getAllStudent =  (req,res)=>{   //declaring the student by calling the students getstudent( because we want to get students in the database)
    pool.query('SELECT * FROM student ORDER BY id ASC',(error, results)=>{ //pool.query parse an incoming request (so we gonna pass what we selected)
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
   
}
module.exports ={getAllStudent};
