const pool = require('../config/database')


//PUT updated data in an existing student(updating students details)
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id)
    const {name, cell_phone, email, course} = req.body

    pool.query(
        'UPDATE student SET name = $1, cell_phone = $2, email = $3, course = $4 WHERE id =$5', [name, cell_phone, email, course, id],
        (error, results) =>{
            if (error){
                throw error
            }
            res.status(200).send(`student modified with ID: ${id}`)
        }
    )
}


module.exports = {updateStudent};
