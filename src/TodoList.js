import React,{useState} from 'react'
import Clock from 'react-digital-clock';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import './index.css'
const TodoList = ()=>{
    const [num,setNum] = useState(0);
    const clickHandle = ()=>{
        setNum(num + 1)
    }
    const clickHandles = ()=>{
        if(num>0){
        setNum(num -1); 
    }else{
        setNum(0);
        alert("0 is the Minimum Digit");
    }
    }
return(
    <>
    <div className="main_div">
    <div className="center_div">
    <div className="clk">
    <Clock />
    </div>
    <h1> {num} </h1>
    <div className="btn_div">
    <Tooltip title="Add" arrow>
    <Button onClick={clickHandle}> <AddIcon /></Button>
    </Tooltip>
    <Tooltip title="Subtract" arrow>
    <Button onClick={clickHandles}> <RemoveIcon/> </Button>
    </Tooltip>

    </div>

    </div>
    </div>
    </>
);




};
export default TodoList;