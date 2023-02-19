function handleOnClick() {
    const handlerStatus=document.getElementById('handler-status');
    handlerStatus.innerText='handle by function attached on onclick attribute';
   }
   document.getElementById('event-listener').addEventListener('click',function eventListener(){
   const eventListener=document.getElementById('event-listener');
   eventListener.innerText='text updated by add listener event button';
   })