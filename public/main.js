const imgbox =document.querySelector(".imgbox");
const whiteboxes =document.querySelectorAll(".whitebox");

imgbox.addEventListener("dragstart",(e)=>{
    e.target.className += '  hold';
    setTimeout(() => {
        e.target.className = "  hide ";
        
    }, 0);  
});

imgbox.addEventListener("dragend",(e)=>{
    e.target.className = " imgbox" 

});

for (whitebox of whiteboxes){
    whitebox.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
    whitebox.addEventListener('dragenter',(e)=>{
        e.target.className+= " dashed";
      
    });
    whitebox.addEventListener('dragleave',(e)=>{
        e.target.className="  whitebox";
     
    });
    whitebox.addEventListener('drop',(e)=>{
        e.target.append(imgbox);
        e.target.className= " whitebox";
     
    });
      
}