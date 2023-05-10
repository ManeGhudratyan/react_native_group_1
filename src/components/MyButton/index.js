function MyButton({title, count, handleClick}){
    return (
        <div>
           <button onClick={()=>
            handleClick(count)
           }>{title}</button>
        </div>
    )
}

export default MyButton;