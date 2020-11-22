
  var callone=true;

  function one()
  {
   
    document.getElementById("heading").style.height="500px";
  }

  function two()
  {
    
    document.getElementById("heading").style.height="200px";
  }



  function call()
  {
    if(callone)
    { 
      one();
      callone=false;
    }
    else {
      two();
      callone=true;
    }
      
  }
    
  
