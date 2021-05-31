const mongoose =require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(con => {
        console.log(`Mongo DB Database Connected with Host: ${con.connection.host}`)
    }).catch(err=>{
        console.log(`DB Connection Error: ${err.message}`)
    })
};

module.exports =connectDatabase;