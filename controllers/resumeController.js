import React from "react";
import Resume from "../models/Resume";
// controller for creating a new resume
// POST: /api/resumes/create
export const createResume = async (req, res) => {
  try {
const userId = req.userId;
const {title} = req.body;

//create new resume
const newResume = await Resume.create({userId, title})
// return success msg
return res.status(201).json({message: 'Resume created successfully' , resume: newResume})

 } catch (error) {
    return res.status(400).json({message: error.message})
  }
}

//for deleting resume
//DELETE: /api/resumes/delete
export const deleteResume = async (req, res) => {
  try {
const userId = req.userId;
const {resumeId} = req.params;

await Resume.findOneAndDelete({userId, _id: resumeId})

// return success msg
return res.status(200).json({message: 'Resume deleted successfully'})

 } catch (error) {
    return res.status(400).json({message: error.message})
  }
}

//get user resume by id
// GET: /api/resumes/get
export const getResumeById = async (req, res) => {
  try {
const userId = req.userId;
const {resumeId} = req.params;

const resume = await Resume.findOne({userId, _id: resumeId})

if(!resume){
  return res.status(404).json({message: "Resume not found"})
}

resume.__v = undefined;
resume.createAt = undefined;
resume.createAt = undefined;

//return success msg
 return res.status(200).json({resume})
} catch(error) {
  return res.status(400).json({message: error.message})
}
}

// get resume by od public
// GET: /api/resumes/public
export const getPublicResumeById = async (req, res) => {
try{
const { resumeId} = req.params;
const resume = await Resume.findOne({public: true, _id: resumeId})

if(!resume){
  return res.status(404).json({message: "Resume not found"})
}

return res.ststus(200).json({resume})
} catch (error) {
   return res.status(400).json({message: error.message})
}
}

//PUT: /api/resumes/update
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
const {resumeId, resuemData, removeBackground} = req.body
const image = req.file;

let resumeDataCopy = JSON.parse(resuemData);

 const resume = await Resume.findByIdAndUpdate({userId, _id: resumeId}, resumeDataCopy, {new: true})

 return res.status(200).json({message:'Saved successfully',resume})
  }catch (error) {
    return res.status(400).json({message: error.message})
}
  }

