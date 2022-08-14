const pool = require('../config/database')



//DELETE a student
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(`DELETE FROM student WHERE id =$1`, [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).send(`student deleted with ID; ${id}`)
    })

}

module.exports = {deleteStudent};
