const mongoose=require('mongoose');

const dbConfig='mongodb+srv://jarufino:689812aa@dorufinus.tartm.mongodb.net/annotations?retryWrites=true&w=majority';

const connection=mongoose.connect(dbConfig, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});
module.exports=connection;