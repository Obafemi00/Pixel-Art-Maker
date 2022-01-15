// Function to make use of jquery
$('#size').submit(function (event) {
    event.preventDefault();
    let lenght = $("#inputHeight").val();
    let breadth = $("#inputWidth").val();
    makeGrid(lenght,breadth)

})


function makeGrid(row,col) {
$('tr').remove()
    for (let i=1; i<= row; i++) {
        $('table').append('<tr></tr>');
        for (var j = 1;j <= col;j++) {
            $('tr:last').append('<td></td>');
            $('td').attr("class", 'cells');
        }
    }
    
    $(' .cells').click(function(event) {
        let color = $('#colorPicker').val();
        $(event.target).css('background-color', color)
    })
}

