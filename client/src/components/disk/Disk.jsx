/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, uploadFile } from "../../actions/file";
import { Button, Container, Form, FormLabel } from 'react-bootstrap';
import "./disk.css"
import { setCurrentDir, setPopupDisplay } from "../../reducers/fileReducer";

import FileList from './fileList/FileList';
import Popup from "./Popup";

import { ArrowLeft, FolderPlus } from "react-bootstrap-icons";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const [dragEnter, setDragEnter] = useState(false)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])


    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    return( !dragEnter ? 
        <Container className="disk" 
            onDrop={dropHandler}
            onDragEnter={dragEnterHandler} 
            onDragLeave={dragLeaveHandler} 
            onDragOver={dragEnterHandler}
        >
            <div className="disk__btns">
                <Button
                    onClick={() => backClickHandler()} 
                    className="disk__back me-2" 
                    variant="secondary"
                    ><ArrowLeft/></Button>
                <Button 
                    className="disk__create" 
                    onClick={() => showPopupHandler()} 
                    variant="secondary"
                ><FolderPlus/></Button>
                <div className="disk_upload">
                    <FormLabel className="disk__upload_label" htmlFor='disk__upload_input'>Загрузить файл</FormLabel>
                    <Form.Control multiple={true} onChange={(event) => fileUploadHandler(event)} type='file' id='disk__upload_input' className='disk__upload_input'/>                    
                </div>
            </div>
            <FileList/>
            <Popup/>
        </Container>
        : 
        <Container className="area text-muted" 
            onDrop={dropHandler}
            onDragEnter={dragEnterHandler} 
            onDragLeave={dragLeaveHandler} 
            onDragOver={dragEnterHandler}
        >
            Перетащите файл сюда
        </Container>
    );
};

export default Disk;