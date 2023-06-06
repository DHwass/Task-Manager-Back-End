const express=require('express')
const router =express.Router()
const {getAllTasks,createTask,getTask,updateTask,deleteTask}=require("../controllers/controller")



router.get('/',getAllTasks)

router.post('/:id',createTask)

router.get('/:_id',getTask)

router.put('/:_id',updateTask)

router.delete('/:_id',deleteTask)

module.exports=router