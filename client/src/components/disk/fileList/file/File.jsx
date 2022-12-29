import React from "react";
import './file.css';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDir, setPushToStack } from "../../../../reducers/fileReducer";

import { Button } from 'react-bootstrap';

import Folder from './folder.svg'
import FileLogo from './file.svg'
import { Download, Trash3 } from "react-bootstrap-icons";
import { downloadFile } from "../../../../actions/file";


const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

function openDirHandler(file) {
    if(file.type === 'dir'){
        dispatch(setPushToStack(currentDir))
        dispatch(setCurrentDir(file._id)) 
    }
}

function downloadClickHandler(e) {
    e.stopPropagation()
    downloadFile(file)
}

    return(
        <div className="file" onClick={() => openDirHandler(file)}>
            <img className="file__img"
                src={file.type === 'dir' ? Folder: FileLogo}
                alt="icon_file"
            />
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0,10)}</div>
            <div className="file__size">{file.size}</div>
            {file.type !== 'dir' && <Button onClick={(e) => downloadClickHandler(e)} variant="success" className="btn__download"><Download/></Button>}
            <Button variant="danger" className="btn__delete"><Trash3/></Button>
        </div>
    )
}

export default File;