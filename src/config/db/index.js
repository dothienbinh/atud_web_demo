const mogoose = require('mongoose');

async function connect(){
    try {
        await mogoose.connect('mongodb://localhost:27017/atweb_ex', {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            // useUniqueCreate:true,
        });
        console.log('Connect Successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect };