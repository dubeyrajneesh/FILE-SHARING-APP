import File from '../Model/File-Model.js';
import bcrypt from 'bcrypt' ;
import dotenv from 'dotenv' ;

dotenv.config() ;
export const uploadFiles= async(req , res)=>{

    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }
    
    try {
        const file = await File.create(fileObj);
        res.status(200).json({ path: `http://localhost:${process.env.PORT}/file/${file._id}`});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }

}

export const getImage = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId);
        
        file.downloadCount++;

        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}