const useranswers = require("../models/useranswers")

exports.useranswersCreate = async function (req, res, next) {
    try {
      const data = await useranswers.create(req.body)
      
      res.status(201).json({  
        message: "useranswers successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.useranswersFind = async function (req, res, next) {
  try {
    const data = await useranswers.find().populate(['questionid' , 'answersid'])

    res.status(200).json({
      status: "success",
      message: "useranswers found successfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.useranswersUpdate =  async function (req, res, next) { 
    try {
      await useranswers.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "useranswers update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.useranswersDelete = async function (req, res, next) {
    try {
      const data = await useranswers.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "useranswers delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

