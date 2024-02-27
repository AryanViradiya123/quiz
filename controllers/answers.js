const answers = require("../models/answers")

exports.answersCreate = async function (req, res, next) {
    try {
      if (!req.body.answerstext || !req.body.answerstype ) {
        throw new Error('pleace enter valid fields')
      }
      const data = await answers.create(req.body)
      
      res.status(201).json({  
        message: "answersCreate successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.answersFind = async function (req, res, next) {
  try {
    const data = await answers.find()

    res.status(200).json({
      status: "success",
      message: "answers findsuccessfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.answersUpdate =  async function (req, res, next) { 
    try {
      await answers.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "answers update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.answersDelete = async function (req, res, next) {
    try {
      const data = await answers.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "answers delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}