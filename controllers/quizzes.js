const quizzes = require("../models/quizzes")

exports.quizzesCreate = async function (req, res, next) {
    try {
      if (!req.body.title || !req.body.description || !req.body.userid) {
        throw new Error('pleace enter valid fields')
      }
      const data = await quizzes.create(req.body)
      
      res.status(201).json({  
        message: "quizzesCreate successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.quizzesFind = async function (req, res, next) {
  try {
    const data = await quizzes.find().populate(['userid'])

    res.status(200).json({
      status: "success",
      message: "quizzesCreatesuccessfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.quizzesUpdate =  async function (req, res, next) { 
    try {
      await quizzes.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "quizzes update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.quizzesDelete = async function (req, res, next) {
    try {
      const data = await quizzes.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "quizzes delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}