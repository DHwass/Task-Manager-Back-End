const Task=require('../models/Task')
const wrapper=require('../middleware/async')


const getAllTasks=wrapper(async (req,res)=>{
        const task= await Task.find()
        res.status(200).json(task)
       
})

const createTask=wrapper(async (req,res)=>{
    
        const task=await Task.create(req.body)
        res.status(201).json(task)
     
})

const getTask=wrapper(async (req,res)=>{
    
        const ID=String(req.params._id)
        const task =await Task.findOne({_id:ID})
        if (!task){
            return res.status(404).json({msg:"ID not found"})
        }
        res.status(201).json(task)
    
})

const updateTask=wrapper(async (req,res)=>{
    
        const task=await Task.findOneAndUpdate(req.params,req.body,{
            runValidators:true,new:true
        }).exec()
        if (!task){
            return res.status(404).json({msg:"ID not found"})
        }
        res.status(201).json(task)
        console.log(req.params,req.body)

    
})

const deleteTask=wrapper(async (req,res)=>{
    
        const task=await Task.findOneAndDelete(req.params)
        res.status(201).json(task) 
        if (!task){
            return res.status(404).json({msg:"ID not found"})
        }    
    
})

module.exports={getAllTasks,createTask,getTask,updateTask,deleteTask}