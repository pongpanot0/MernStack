let mongoose = require('mongoose');
express = require('express');
router = express.Router();


let studentSchema = require('../models/student')


router.route('/create-student').post((req,res,next) =>{
    studentSchema.create(req.body,(error,data) =>{
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})

//read 
router.route('/').get((req,res) => {
    studentSchema.find((error,data) =>{
        if(error) {
            return next (error);
        } else {
            res.json(data);
        }
    })
})

//get single student
router.route('/edit-student/:id').get((req,res) =>{
    studentSchema.findById(req.params.id,(error,data)=>{
        if (error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})

//Update
router.route('/update-students/:id').put((req,res,next)=>{
    studentSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body
    } ,(error,data) =>{
        if(error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data);
            console.log('Student update')
        }
    })
})
//Delete
router.route('/delete-student/:id').delete((req,res,next) =>{
    studentSchema.findByIdAndRemove(req.params.id,(error,data) =>{
        if(error) {
            return next(error)
        } else {
            res.status(200).json({
                msg:data
            })
        }
    })
})
module.exports = router;