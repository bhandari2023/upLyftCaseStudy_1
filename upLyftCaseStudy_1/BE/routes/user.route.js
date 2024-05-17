const {getAllUsers, getUserByID, createNewUser, updateUserById, deleteUserById} = require('../controllers/user.controller');

const UserModel= require('../model/user.model');

const express= require('express');

const router= express.Router();
// get all users
router.get("/", getAllUsers)

//create new user
router.post("/", createNewUser)

//get user by id
router.get("/:id", getUserByID)

// delete user by id 
router.delete("/:id", deleteUserById)

//update user by id 
router.put("/:id", updateUserById)

module.exports= router;

