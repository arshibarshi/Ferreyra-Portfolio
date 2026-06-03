require('dotenv').config(); // loads the env files and variables
const {createClient} = require('@supabase/supababse-js') 
const supabase = createClient(
    proces.env.SUPABASE_URL,
    process.env.SUPABSE_KEY
)

async function testConnection(){
    const {data, error} = await supabase.from('test').select()

    if(error){
        console.error('Error connecting to Supabase:', error)
    } else {
        console.log('Data from Supabase:', data)
    }
}

testConnection()

const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})