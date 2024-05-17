import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import propTypes from 'prop-types';

const AddNewTask = ({ onHandleNewTask }) => {
    const [taskName, setTaskName] = useState('');
    const [show, setShow] = useState(false);


    const onHandleTaskName = (event) => {
        setTaskName(event.target.value);
    };


    const onSubmitNewTask = (event) => {
        event.preventDefault();
        if (taskName.length > 0) {

            let newTask = {
                id: Math.random(),
                name: taskName,
                done: false
            }
            setShow(false)
            onHandleNewTask(newTask)
            setTaskName('')
        } else {
            alert("Please insert a name for the task you want to add")
        }
    }
    return (
        <>
            {show ? <Button variant="primary" type="button" onClick={onHandleView}>New Task</Button>
                :
                <Form onSubmit={onSubmitNewTask}>
                    <Form.Group className="mb-3" controlId="fromName">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control type="name" value={taskName} onChange={onHandleTaskName} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form>}
        </>
    )
}

export default AddNewTask

AddNewTask.propTypes = {
    onHandleNewTask: propTypes.func
}
