$(document).ready(function(){
    var ajaxUrl = 'ajax.php',
        tBody = $('#main-table');
    $.ajax({
        dataType: "json",
        type: "POST",
        url: ajaxUrl,
        data : {},
        success: function(result) {
            console.log(result.length);
            for ( var i = 0; i < result.length; i++ ) {
                var emp = result[i],
                    $line = $( "<tr></tr>" );
                $line.append( $( "<td></td>" ).html( i ) );
                $line.append( $( "<td></td>" ).html( emp['name'] ) );
                $line.append( $( "<td></td>" ).html( emp.code ) );
                $(tBody).append( $line );
            }
        },
        error: function(result) {
            tBody.remove();
            $('body').append('<h1>Error</h1>')
        }
    });
    $('.sort').click(function(){
        var $this = $(this),
            element = $this.data('elem'),
            a = new Array();

        for (i = 1; i < tBody.rows.length; i++) {
            a[i - 1] = new Array();
            a[i - 1][0] = tBody.rows[i].getElementsByTagName("td").item(element).innerHTML;
            a[i - 1][1] = tBody.rows[i];
        }
        if($.isNumeric(a[0][0])){
            a.sort(sortitdesc);
        }else{
            a.sort()
        }
        $this.siblings().removeClass('sort-up sort-down');
        if($this.hasClass('sort-up')){
            a.reverse();
            $this.removeClass('sort-up').addClass('sort-down')
        }else{
            $this.addClass('sort-up').removeClass('sort-down')
        }

        for (i = 0; i < a.length; i++)
            tBody.appendChild(a[i][1]);
    });

    function sortitdesc(a,b){
        return(b[0]-a[0]);
    }
});




