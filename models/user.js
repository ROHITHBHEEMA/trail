const mongoose = require('mongoose');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    Associationname:{
        type:String,
        required:true
    },
    AssociationType:{
        type:String,
        required:true
    },
    DescHeading:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    // DescImg:{
    //     type:String,
    //     required:true
    // },
    activeMembers:{
        type:Number,
        required:true
    },
    totalEvents:{
        type:Number,
        required:true
    },
    P1name:{
        type:String,
        required:true
    },
    P1Pos:{
        type:String,
        required:true
    },
    // P1Img:{
    //     type:String,
    //     required:true
        
    //     // required:true
    // },
    P2name:{
        type:String,
        required:false,
        default:'Partner2'
    },
    P2Pos:{
        type:String,
        required:false,
        default:'Partner2 Position'
    },
    
    // P2Img:{
    //     type:String,
    //     required:false,
        
    // },
    P3name:{
        type:String,
        required:false,
        default:'Partner3'
    },
    P3Pos:{
        type:String,
        required:false,
        default:'Partner3 Position'
    },
    
    // P3Img:{
    //     type:String,
    //     required:false,
        

    // },
    address:{
        type:String,
        required:true

        // required:true
    },
    Phone:{
        type:String,
        required:true

        // required:true,
    
    },

    email:{
        type:String,
        required:true

        // required:true,
   
    },

    hrs:{
        type:String,
        required:true

        // required:true
    },

    pin:{
        type:Number,
        required:true
    },

    days:{
        type:String,
        required:true
    }

   

});

module.exports= mongoose.model('User',userSchema);



