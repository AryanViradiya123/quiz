const question = require("../models/question")

exports.questionCreate = async function (req, res, next) {
    try {
      if (!req.body.questiontext || !req.body.questiontype ) {
        throw new Error('pleace enter valid fields')
      }
      const data = await question.create(req.body)
      
      res.status(201).json({  
        message: "questionCreate successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.questionFind = async function (req, res, next) {
  try {
    const data = await question.find()

    res.status(200).json({
      status: "success",
      message: "questionCreatesuccessfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.questionUpdate =  async function (req, res, next) { 
    try {
      await question.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "question update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.questionDelete = async function (req, res, next) {
    try {
      const data = await question.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "question delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}