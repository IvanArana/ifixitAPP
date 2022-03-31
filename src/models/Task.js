//lo q se inserta en la DB
import {Schema, model} from "mongoose";

const TaskSchema = Schema ({
    title: {
        type: String,
        require: true,
        trim:true,
        unique:true
    },
    devicename:{
        type: String,
        trim: true
    },
    date:{
        type: String,
        trim: true
    },dateegress:{
        type: String,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },sexo:{
        type: String
    },
    done:{
        type: Boolean,
        default:false
    }
},
    {
        timestamps:true,
        versionkey:false
    }
);

export default model ("Task", TaskSchema);