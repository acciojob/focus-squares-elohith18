//your JS code here. If required.
const sq=document.querySelectorAll(".square");
        sq.forEach(sqs=>{
            sqs.addEventListener("mouseover",()=>{
                sq.forEach(other=>{
                    if(other!==sqs){
                        other.style.backgroundColor="#6F4E37";
                    }
                })
            })
            sqs.addEventListener("mouseleave",()=>{
                sq.forEach(other=>{
                    other.style.backgroundColor="#E6E6FA"
                }) 
        })
        })