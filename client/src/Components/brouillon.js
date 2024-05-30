import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
  
import axios from 'axios'

export const getTech=createAsyncThunk('/getTech' ,async()=>{
    try {
        
        let resultat=axios.get('http://localhost:5000/Tech/all')
        return await resultat;
    } catch (error) {
        console.log(error)
    }
})
export const addTech=createAsyncThunk('/addTech',async(newTech)=>{
  try{
      let resultat= await axios.post('http://localhost:5000/Tech/add',newTech)
      return  resultat;   

  }catch (error) {
      console.log(error)
  }
})
const initialState = {
  Tech: null,
  status:null,
}

export const TechSlice = createSlice({
  name: 'Tech',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getTech.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getTech.fulfilled, (state, action) => {
        state.status = "success";
        state.Tech = action.payload?.data?.voicilist;
      })
      .addCase(getTech.rejected, (state) => {
        state.status = "fail";
      })
      
}
})
 //   add
 .addCase(addTech.pending, (state) => {
  state.status = "pending";
})
.addCase(addTech.fulfilled, (state) => {
  state.status = "success";
})
.addCase(addTech.rejected, (state) => {
  state.status = "fail";
})



export const {} = TechSlice.actions;

export default TechSlice.reducer;



///////////////////////
const express=require('express')
const Tech = require('../models/Tech')

const Techrouter=express.Router()

// get all Tech
Techrouter.get('/all',async(req,res)=>{
  try {
      const rest=await Tech.find()
      res.send({voicilist:rest,msg:' voici les operation enregistré'})
  } catch (error) {
      console.log(error)
  }
})
//get Tech by id 

Techrouter.get("/:id",async(req,res)=>{
  try {
     const rest=await Tech.findById({_id:req.params.id})
      res.send({resultat:rest,msg:'hahi l operation tech'})
  } catch (error) {
      console.log(error)
  }
})

//add new Tech 
Techrouter.post("/add",async(req,res)=>{
  try {
      const newTech= new Tech (req.body)
      const rest= await newTech.save()
      res.send ({newTech:rest,msg:'operation enregistré'})
      
  } catch (error) {
      console.log(error)
      
      
  }

})

//delete tech
Techrouter.delete("/:id",async(req,res)=>{


try {
  const rest= await Tech .findByIdAndDelete({_id:req.params.id})
   res.send({msg:'operation supprimé'})
} catch (error) {
   console.log(error)
}
})
//update tech
Techrouter.put("/:id",async(req,res)=>{


  try {
    const rest= await Tech.findByIdAndUpdate ({_id:req.params.id},{$set:{...req.body}})
     res.send({msg:'operation updated'})
 } catch (error) {
     console.log(error)
 }
})
module.exports=Techrouter
///////////// schema
const mongoose = require('mongoose')
const schema=mongoose.Schema
const Techschema= new schema({
  name:{
    type:String,
    required:true
  },
  photo:{
    type:String,
    default:'https://thumbs.dreamstime.com/z/aucune-photo-ou-ic%C3%B4ne-d-image-vide-chargement-images-marque-manquante-non-disponible-%C3%A0-venir-silhouette-nature-simple-dans-l-215973362.jpg',

  }
})
module.exports = Tech =mongoose.model("Tech",Techschema)
///////////
   
