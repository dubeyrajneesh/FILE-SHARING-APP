import express , {Router} from 'express' ;

import { uploadFiles , getImage } from '../Controller/File-controller.js';
import upload from '../Utils/upload.js';

const router = express.Router() ;

router.post('/upload' ,  upload.single('file'), uploadFiles)
router.get('/file/:fileId', getImage);

export default router ;