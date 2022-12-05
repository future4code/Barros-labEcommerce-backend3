import { Request, response, Response } from "express";



export default async function createCharacter(
    req:Request,
    res:Response
): Promise<void>{

 try {
  const { name, gender, description } = req.body
    

  //   characters.push({
    //     id:Date.now(),
   //      name,
     //    gender,
      //   description
    // })
 
     res.status(201).end()
  
 } catch (error) {
  res.status(500).end()

  
 }
}