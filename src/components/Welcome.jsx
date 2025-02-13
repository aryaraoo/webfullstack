function Welcome(props) {
    console.log(props)
   const {name,usn} = props.obj;
    
    return (
      <>
        <div className="welcome-card">
         <h2>Welcome... {name} with {usn} </h2> 
          <p>This is a simple React 
            component using props </p>
        </div>
      </>
    )
  }

  export default Welcome