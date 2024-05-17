import React from 'react'
import { Card, Button } from 'react-bootstrap'
import DeleteTask from '../deleteTask/DeleteTask';
import { useState } from 'react';
import AddNewTask from '../addNewTask/AddNewTask';

const Task = () => {
  let tasksList  = [
    {
      id: 1,
      name: "Completar informe de ventas",
      done: false
    },
    {
      id: 2,
      name: "Reunión de equipo",
      done: false
    },
    {
      id: 3,
      name: "Resolver problemas de red",
      done: false
    }
  ];

  const [tasks, setTasks] = useState(tasksList)

  const onHandleDeleteTasks = (newTaskList) => (
    setTasks(newTaskList)
  );

  const onHandleNewTask = (newTaskParm) => {
    // console.log(newTaskParm)
    const newTask = [...tasks, newTaskParm]
    setTasks(newTask)
  }

  const onHandleFinishTask = (taskId) => {
    // console.log(taskId)
    const newFinishedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: true } : task
    )
    setTasks(newFinishedTasks)
  }

  return (
    <>
      <AddNewTask onHandleNewTask={onHandleNewTask}/>
      {tasks.map((task) => (

        <Card key={task.id} style={{ width: '15rem' }} className='card'>
          <Card.Body>
            <Card.Title>{task.done ? <s>{task.name}</s> : task.name}</Card.Title>
            {task.done ? <Card.Text className='finish'> Complete task </Card.Text> : <Card.Text className='notFinish'>Incomplete task</Card.Text>}
            {task.done ?
              <Button variant="primary" type="button" className='marginButton'>Task Done</Button>
              : <Button variant="warning" type="button" className='marginButton' onClick={() => onHandleFinishTask(task.id) /*Recordatorio: si no es llamado asi se ejecuta al montar el componente*/}>Finish Task</Button>}

            <DeleteTask idParm={task.id} tasks={tasks} deleteTask={onHandleDeleteTasks} />
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Task