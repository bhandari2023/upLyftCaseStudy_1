
const bcrypt= require('bcrypt');

const UserModel= require('../model/user.model');

const getAllUsers= async (req,res)=>{
    try{
        const users= await UserModel.find();
        res.status(200).send(users);
    }catch(error){
        console.log(error);
        return res.send({message:"Error occured while registering the new user", error})
    }


}


const getUserByID= async (req,res)=>{
    try {
            const id= req.params.id;
            const user= await UserModel.findOne({_id:id});
                res.status(200).send({message:"user found",user})

    } catch (error) {
        console.log(error);
        return res.send({message:"Error Finding user",error})
        
    }
    
}


const createNewUser= async (req,res)=>{
    const{name, email, password, phnumber}=req.body;
    if(!name||!email||!password||!phnumber){
        return res.status(400).send({message:"Allfields are mandatory"});
    }
    try{
        const hashpass= await bcrypt.hash(password,12);
        const newUser= new UserModel({name, email, password:hashpass, phnumber});
        const resp = await newUser.save();
        return res.send({message:"New User registered", resp})
    } catch(error) {
        console.log(error);
        return res.send({message:"Error occured while registering the new user", error})
    }
    
}


const updateUserById= async (req,res)=>{
const id= req.params.id;
    const{name,password}=req.body;

    try {
        const user= await UserModel.findOne({_id:id})
     
        if(!user){
            return res.send({message:"user not registerd"});
        } 
        user.name= name;
        user.password= await bcrypt.hash(password,12) ;
        await UserModel.findByIdAndUpdate(id,user);
        return res.status(200).send({message:"user updated successFully"});
    } catch (error) {
        console.log(error);
        return res.send({message:"error while updating the use datar", error})
        
    }
    
}


const deleteUserById= async(req,res)=>{

    const id= req.params.id;
    const{name,password}=req.body;

    try {
        const user= await UserModel.findOne({_id:id})
       
        if(!user){
            return res.send({message:"user not found"});
        } 
        
        await UserModel.findByIdAndDelete(id,);
        return res.status(200).send({message:"user Deleted successFully"});
    } catch (error) {
        console.log(error);
        return res.send({message:"error while deleting the use datar", error})
        
    }
    
}

module.exports={
    getAllUsers,
    getUserByID,
    createNewUser,
    updateUserById,
    deleteUserById

}