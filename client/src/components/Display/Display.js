import { useState, useEffect, useRef } from 'react';
import React from 'react'
import './Display.css'
import { uploading } from '../../redux/Action';

const Display = () => {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const res= await uploading(data);
        setResult(res.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className="container">

        <div className="Box-1">

            
            <img src="https://images.unsplash.com/photo-1616484173745-07f25fd0547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bnNldCUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="image"></img>

        </div>

        <div className="Box-2">
            <h1 className= "heading-ctrl-1">Upload Your File</h1>
            <h3 className= "heading-ctrl-2"> Share and Download your File</h3>
          <div >  <button onClick={() => onUploadClick()} type="button" className=" btn-ctrl btn btn-danger btn-lg">Upload File</button></div>

            <input className="input-ctrl"   ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])} type='file'/>

                <a className="link-ctrl" href={result} target='_blank'>{result}</a> 
        </div>

        
      
    </div>
  )
}

export default Display
