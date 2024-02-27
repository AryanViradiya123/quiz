const userquizzes = require("../models/userquizzes")

exports.userquizzesCreate = async function (req, res, next) {
    try {
      const data = await userquizzes.create(req.body)
      
      res.status(201).json({  
        message: "userquizzes successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.userquizzesFind = async function (req, res, next) {
  try {
    const data = await userquizzes.find().populate(['userid' , 'quizzesid'])

    res.status(200).json({
      status: "success",
      message: "userquizzes found successfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.userquizzesUpdate =  async function (req, res, next) { 
    try {
      await userquizzes.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "userquizzes update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.userquizzesDelete = async function (req, res, next) {
    try {
      const data = await userquizzes.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "userquizzes delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

