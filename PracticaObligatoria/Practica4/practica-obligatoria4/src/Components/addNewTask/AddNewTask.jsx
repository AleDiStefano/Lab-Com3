import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import propTypes from 'prop-types';

const AddNewTask = ({ onHandleNewTask }) => {
    const [taskName, setTaskName] = useState('');

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
            onHandleNewTask(newTask)
            setTaskName('')
        } else {
            alert("Please insert a name for the task you want to add")
        }
    }
    return (
        <>
            <Form onSubmit={onSubmitNewTask}>
                <Form.Group className="mb-3" controlId="fromName">
                    <Form.Control type="name" placeholder='Write here the task name' value={taskName} onChange={onHandleTaskName} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </>
    )
}

export default AddNewTask

AddNewTask.propTypes = {
    onHandleNewTask: propTypes.func
}
