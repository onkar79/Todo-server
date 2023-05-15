import {Document} from 'mongoose'

export interface ITodo extends Document {
  id:string
  text:string
  date:number
  status:boolean
}