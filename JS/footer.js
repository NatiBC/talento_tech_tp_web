/* ALL */
(function(){
    try{
        const footer = document.querySelector('footer small');
        if(footer) footer.innerHTML = '© ' + new Date().getFullYear() + ' Takai Ilustraciones.';
    }catch(e){}})();

