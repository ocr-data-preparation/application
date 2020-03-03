import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import './chooseImage.css'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  
  
function ChooseImage(props) {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
          
        })));
      }
    });
    function onChange(e){
      var button = document.getElementById("bt1").style.display = "none";
      button = document.getElementById("bt2").style.display="initial";
      document.getElementById("icon").style.display = "none";
      document.getElementById("dz2").style.display = "none";
      document.getElementById("image").style.display = "initial";
    }
    const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
          />
        </div>
      </div>
    ));
  
    useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
  
    return (
      <section className="container">
        <div className="navbar">
          <img src="a"></img>
      </div>
        <div {...getRootProps({className: 'dropzone'} )}onChange={onChange}>
          <input {...getInputProps()} />
          <ImageSearchIcon id="icon" style={{ fontSize: '15vw' }}/>
          <div style={thumbsContainer} id = "image" >
            {thumbs}
          </div>
        </div>
          <div {...getRootProps({className: 'dropzone'}) }id = "dz2" onChange={onChange}>
          <input {...getInputProps() } />
          <button id="bt1"  className="choose_button">
            Choose image
          </button>
          </div>
          <input type ="submit" id ="bt2" className="choose_button" style={{display:"none"}}/>
          
      </section>
    );
  }
  export default ChooseImage