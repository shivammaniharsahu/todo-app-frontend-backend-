const express = require('express')
const Todo = require('../models/Todo')
const auth = require("../middleware/auth")

const router = express.Router()
 
router.post("/todos", auth.auth, async (req, res) => {
    try {
        const todo = new Todo({...req.body, user_id: req.user._id})
        await todo.save()
        res.status(200).send(todo);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/todos", auth.auth, async (req, res) => {
    try {
        const query = {user_id: req.user._id}
        if(req.query.search){
            query["$or"] = [
                {"title": new RegExp(`${req.query.search}`, "i")},
                {"description": new RegExp(`${req.query.search}`, "i")}
            ]
        }
        if(req.query.status){
            query["status"] = req.query.status;
        }
        Todo.find(query, (err, res2)=>{
            if(err){
                console.log(err);
            }
            res.send(res2);
        })
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/todos/all", auth.admin, async (req, res) => {
    try {
        const query = {}
        if(req.query.search){
            query["$or"] = [
                {"title": new RegExp(`${req.query.search}`, "i")},
                {"description": new RegExp(`${req.query.search}`, "i")}
            ]
        }
        if(req.query.status){
            query["status"] = req.query.status;
        }
        Todo.find(query, (err, res2)=>{
            if(err){
                console.log(err);
            }
            res.send(res2);
        })
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/todos/:id", auth.auth, async (req, res) => {
    try {
        const query = {user_id: req.user._id, _id: req.params.id}
        Todo.find(query, (err, res2)=>{
            if(err){
                console.log(err);
            }
            res.send(res2);
        })
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/todos/:id", auth.auth, async (req, res) => {
    try {
        const query = {user_id: req.user._id, _id: req.params.id}
        Todo.deleteOne(query, (err, res2)=>{
            if(err){
                console.log(err);
            }
            res.send(res2);
        })
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/todos/:id", auth.auth, async (req, res) => {
    try {
        const query = {user_id: req.user._id, _id: req.params.id}
        const newtodo = new Todo({...req.body, user_id: req.user._id})
        newtodo._id = req.params.id;
        Todo.updateOne(query, newtodo, (err, res2)=>{
            if(err){
                console.log(err);
            }
            res.send(res2);
        })
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;