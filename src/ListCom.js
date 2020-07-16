import React,{ useState } from 'react'
import "./TodoAppUsingMaterialicon.css";
import RemoveIcon from '@material-ui/icons/Remove';

const ListCom = (props)=>{
    const [line, setLine] = useState(false);
    const cutIt = () =>{
    setLine(true);
    }
    const Reverse  = ()=>{
        setLine(false);
    }
    return(
    <div className="todo_style">
        <span onDoubleClick={Reverse} onClick={cutIt}><RemoveIcon className="deleteIcon" /></span>
    <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
    </div>
    );
}
export default ListCom;