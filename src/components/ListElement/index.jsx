import './styles.css';
import {Link} from 'react-router-dom';

const ListElement = ({task,handleClick_complete,handleClick_remove}) => {
    const {id,title,description,completed} = task;

    return (
        <div className={completed ? "list-element-complete" : 'list-element-nocomplete'} key={id}>
            <div className={'title-group'}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={'button-group'}>
                <button className='button' type="button" onClick={()=>{handleClick_complete(id)}}>Complete</button>
                <button className='button' type="button" onClick={()=>{handleClick_remove(id)}}>Delete</button>
                <Link to={`/edit-task/${id}`}>Edit</Link>
            </div>
        </div>
    )
}

export default ListElement;