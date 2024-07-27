import React from 'react'

const AddItems = ({addItems,setAddItems,submitHandler}) => {
   

  return (
    <form onSubmit={submitHandler}>
      <input 
      type ="text"
      placeholder='AddItem'
      value={addItems}
      onChange={(e)=>{setAddItems(e.target.value)}}
      required />
      <button>+</button>
    </form>
  );
}

export default AddItems