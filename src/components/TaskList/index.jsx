import { useSelector,useDispatch } from "react-redux";
import { completeTask, removeTask } from '../../features/tasks/taskSlice';
import {Link} from 'react-router-dom';
import ListElement from "../ListElement";
import './styles.css';  

const TaskList = () => {
    const dispatch = useDispatch();
 
    const stateTasks = useSelector(state => state.tasks);

    const handleClick_complete = id => {
        dispatch(completeTask({id}))
    }

    const handleClick_remove = id => {
        dispatch(removeTask({id}))
    }

    return (
        <>
            <h2 className={"head"}>Task List: {stateTasks.length}</h2>
            <div className={"task-list"}>
                {
                    stateTasks.length > 0 &&
                    stateTasks.map(task => (
                        <ListElement key={task.id} task={task} handleClick_complete={handleClick_complete} handleClick_remove={handleClick_remove}/>
                    ))
                }
                {
                    stateTasks.length <= 0 &&
                    <div className={'no-items'}>
                        <h3>No Tasks saved yet</h3>
                        <h4>Please create a new task to start</h4>
                    </div>
                }
            </div>
            <Link className="link" to='/create-task'>Go to Create Task</Link>
        </>
    )
}

export default TaskList;
