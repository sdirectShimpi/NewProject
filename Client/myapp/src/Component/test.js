import React, {useState, useEffect} from 'react'

const HelloWorld = () => {
    const [name, setName] = useState('Shimpi')
    useEffect(()=>{
        setName('jhon')
    },[])
    function Hello(){
       
        console.log(name);
    }
    Hello();

    function changeName(){
      
    }
    changeName()


  return (
    <div>test</div>
  )
}

export default HelloWorld