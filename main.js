$(document).ready(function(){
    $('form').on('submit', function(reload){
        reload.preventDefault();

        const addLi = $('#text-input').val();
        const addNewLi = $('ul');

        $(`<li>${addLi}</li>`).appendTo(addNewLi);

        
    })

    $('ul').on('click', 'li', 
        function(){
            $(this).css('text-decoration','line-through');
    })   
})