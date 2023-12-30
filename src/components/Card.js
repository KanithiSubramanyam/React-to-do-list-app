import React, { useState } from 'react';
import EditTask from '../Modals/EditTask';
const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const handleDelete = () =>{
        deleteTask(index);
    }
    const toggle = () =>{
        setModal(!modal);
    }
    const updateTask = (obj) =>{
         updateListArray(obj, index)
    }
    const color = [
        {
            primaryColor : "#5D93E1",
            SecondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            SecondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            SecondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            SecondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            SecondaryColor : "#F3F0FD"
        }
    ]
    return (
        <>
            <div className='card col-md-3 md-3 taskcard' style={{'background-color':color[index%5].primaryColor}}>
                <div className='card-body text-center box-shadow'>
                    <div className='heading' style={{'background-color':color[index%5].SecondaryColor}}>
                        <p>{taskObj.Name}</p>
                    </div>
                    <p className='description text-justify'>{taskObj.Description}</p>
                </div>
                <div className='card-button'>
                    {/* <button type='submit'>submit</button> */}
                    <i className='far fa-edit' style={{ 'color': 'blue', 'cursor':'pointer' }} onClick={() => setModal(true)}></i>
                    <i className='fas fa-trash' style={{ 'color': 'red', 'cursor':'pointer'}} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask modal = {modal} toggle = {toggle} updateTask={updateTask} taskObj = {taskObj}/>
        </>
    );
};

export default Card;