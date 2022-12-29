import React, { useState } from "react";
import { Button, CloseButton } from "react-bootstrap";
import { Check2 } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { createDir } from "../../actions/file";
import { setPopupDisplay } from "../../reducers/fileReducer";
import Input from "../../utils/Input";


const Popup = (props) => {
    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
        setDirName('')
        dispatch(setPopupDisplay('none'))
    }

    return(
        <div 
            className="popup" 
            onClick={() => dispatch(setPopupDisplay('none'))} 
            style={{display: popupDisplay}}
        >
            <div 
                className="popup__content"
                onClick={(event => event.stopPropagation())}
            >
                <div className="popup__header">
                    <div className="popup__title">Создать новую папку</div>
                    <CloseButton 
                        className="popup__close" 
                        onClick={() => dispatch(setPopupDisplay('none'))}
                    ></CloseButton>
                </div>
                <div className="popup__input">
                <Input
                    type="text"
                    value={dirName}
                    setValue={setDirName}
                    placeholder="Введите название папки..."
                />
                </div>
                <Button 
                    className="popup__create" 
                    variant="success"
                    onClick={() => createHandler()}
                >
                    <Check2/>
                </Button>
            </div>
        </div>
    )
}

export default Popup;