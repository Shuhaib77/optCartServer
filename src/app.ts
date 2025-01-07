import express from 'express'
import cors from 'cors'
import supabase from './config/connectSupabase'
import database_connect from './config/connectSupabase'

const app=express()
database_connect()
app.use(cors())
export default app

