const asyncHander = require("express-async-handler");
const Goal = require("../models/goalModel")
const User = require("../models/userModel")

const getApi = asyncHander(async(req,res) => {
    const goals = await Goal.find({user:req.user.id});
    res.status(200).json(goals);

})

const postApi = asyncHander(async (req,res) => {
    console.log(req.body)
  if(!req.body.text){
      res.status(400)
      throw new Error("Please add a field");
  }
   const createGoals = await Goal.create({
       text:req.body.text,
       user:req.user.id
   })
    res.status(200).json(createGoals);
})

const putApi = asyncHander(async (req,res) => {
    const gaol = Goal.findById(req.params.id);
    if (!gaol) {
      res.status(400);
      throw new Error("Goal not found");
    }
    const user = await User.findById(req.user.id);
    if(!user){
      res.status(401);
      throw new Error("user not found");
    }
    if (gaol.user.toString() !== user.id) {
      res.status(401);
      throw new Error("user not authorized");
    }
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })

      res.status(200).json(updateGoal);
})
const delApi = asyncHander(async (req,res) => {
     const gaol = Goal.findById(req.params.id);
     if (!gaol) {
       res.status(400);
       throw new Error("Goal not found");
     }
      const user = await User.findById(req.user.id);
      if (!user) {
        res.status(401);
        throw new Error("user not found");
      }
      if (gaol.user.toString() !== user.id) {
        res.status(401);
        throw new Error("user not authorized");
      }
    const deletegoal = await Goal.remove();
      res.status(200).json("goal deleted");
})
 module.exports = { getApi, postApi, putApi, delApi };