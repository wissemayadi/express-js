const express= require ("express");
const app = express();
// const pug=require('pug');
const port = process.env.PORT || 5000;


app.set('view engine', 'pug');
app.get('/',(req,res,next)=>{

    res.render(
        'home',
        {title:"express",message:"hello"}
        )

})

app.get('/views/contact.pug',(req,res,next)=>{
res.render(
    'contact',
    {title:'contactUs'}
)

})

app.get('/views/service.pug',(req,res,next)=>{

    res.render(
        'service',
        {title:"our service"}
    )
})
app.use(logger)
function logger(req, res, next) {
      var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                  
      var hours = new Date().getHours();
        
            const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
            const options = { weekday: 'long' };
            var day = event.toLocaleDateString('en-US', options)
            console.log(hours)


                  if (weekDay.includes(day)) {
                        if (hours < 17 && 9 < hours) {
                  
                        next();
                  } else {
                  res.send("not available today ");
                        }
                        
                  } else {
                        res.send("alles klar herzlich welkommen");
                  }
                  
      }





app.listen(port, (err) => {
    err ? console.log(err) : console.log(`the server is running on port ${port}`);
  });

