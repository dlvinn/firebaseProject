export const Task = (props) => {
    return <div style={{backgroundColor:props.complete ? "green" : "red"}}>
      <h1 >{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.completeFun(props.id)}>Complete</button>
      </div>
}