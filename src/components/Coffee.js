import { useEffect } from 'react';

const Coffee = () => {
    const script = document.createElement("script");
    script.setAttribute('data-name','BMC-Widget');
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute('data-id', 'jordangamache');
    script.setAttribute('data-description', 'Buy me a coffee');
    script.setAttribute('data-message', 'This web is free to use. Do you want to help supporting it?');
    script.setAttribute('data-color',"rgba(254, 217, 11, 1)");
    script.async="true"
    //Call window on load to show the image
    script.onload=(() => {
        var evt = document.createEvent('Event');  
        evt.initEvent('DOMContentLoaded', false, false);  
        window.dispatchEvent(evt);
    });

  useEffect(() => {    
    script.className = 'coffee';
    document.head.appendChild(script);

    setTimeout(() => {
      const coffee = document.getElementById("bmc-wbtn");
      coffee.style.position = 'fixed';
      coffee.style.right = '2vw';
      coffee.style.bottom = '5vh';
      
      document.head.removeChild(script);

      document.head.appendChild(script);

    }, 250);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(document.getElementById("bmc-wbtn"));
    };
  }, [script]);
  
  return (null);
};

export default Coffee;
