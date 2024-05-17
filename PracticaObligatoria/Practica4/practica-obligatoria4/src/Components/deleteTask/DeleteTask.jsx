import React from 'react'
import { Button } from 'react-bootstrap'
import propTypes from 'prop-types';

const DeleteTask = ({ idParm,tasks , deleteTask }) => {

    const onhandleDeleteTask = () => {       
        let listWithoutTask = []
        tasks.map((task)=> {
            if(task.id !== idParm)
            {
                listWithoutTask.push(task)
            }
        })
        deleteTask(listWithoutTask)
    };


  return (
    <div>
        <Button variant="danger" type="button" onClick={onhandleDeleteTask}>Delete</Button>
    </div>
  )
}

export default DeleteTask


DeleteTask.propTypes = {
    idParm: propTypes.number,
    tasks: propTypes.array,
    deleteTask: propTypes.func,
}
