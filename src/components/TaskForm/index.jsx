import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTask,editTask } from '../../features/tasks/taskSlice';
import {v4 as uuid} from 'uuid';
import {useNavigate, Link, useParams} from 'react-router-dom';
import "./styles.css";

const TaskForm = () => {
    const initialState={
        title:'',
        description:''
    }
    const dispatch = useDispatch();
    const stateTasks = useSelector(state => state.tasks);
    const navigate = useNavigate();
    const {id} = useParams();

    const [task,setTask] = useState(initialState);

    useEffect(()=>{
        if(id!==undefined){
            const newTask = stateTasks.filter(value=>value.id === id)[0];
            const checkTask = {
                id: id,
                title:newTask.title,
                description:newTask.description,
            };
            setTask(checkTask);
        }
    },[id])

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(id===undefined){
            dispatch(addTask({
                id:uuid(),
                ...task
            }))
        }
        else{
            dispatch(editTask({
                ...task
            }))
        }
        setTask({
            title:'',
            description:''
        });
        navigate('/');
    }

    return (
        <>
            <form className={"form"} onSubmit={handleSubmit}>
                <h2 className={"head"}>{id===undefined?"Add a new task":"Update the task"}</h2>

                <input type="text" value={task.title} name="title" placeholder="title" onChange={handleChange}/>

                <textarea name="description" value={task.description} placeholder="description" onChange={handleChange}/>

                <button type="submit">Save</button>
            </form>
            <Link className="link" to='/'>Go to Home</Link>
        </>
    )
}

export default TaskForm;