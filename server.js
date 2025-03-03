const express=require('express');
const app=express();
const port=3000

app.get('/assistant/greet',(req,res)=>{
    const name=req.query.name
    const date=new Date().getDay()
    const dayMessage=[
        "Have a wonderful day!",
        "Happy Monday! Start your week with energy!",
        "Have a wonderful day!",
        "Have a wonderful day!",
        "Have a wonderful day!",
        "It's Friday! The weekend is near!",
        "Have a wonderful day!",
    ]

    res.send({
        "welcomeMessage": `Hello, ${name}! Welcome to our assistant app!`,
        "dayMessage": dayMessage[date]

    })
})

app.listen(port,()=>{
    console.log(`server is running in ${port}  hello`)
})
