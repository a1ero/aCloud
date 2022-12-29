import React from "react";
import { useSelector } from "react-redux";
import File from "./file/File";
import './fileList.css'


const FileList = () => {

    const files = useSelector(state => state.files.files).map(file => <File key={file._id} file={file}/>)

    return(
        <div className="filelist">
            <div className="filelist__header">
                <div className="filelist__name text-muted">Название</div>
                <div className="filelist__data text-muted">Дата</div>
                <div className="filelist__size text-muted">Размер</div>           
            </div>
            {files}
        </div>
    )
}

export default FileList;