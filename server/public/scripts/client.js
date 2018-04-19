console.log('JS is sourced');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery is here');
    getRecords();
    $('#submitButton').on('click', addNew);
}

function getRecords() {
    $.ajax({
        method: "GET",
        url: "/records"
    })
    .then((response) => {
        for(let record of response) {
            $('#recordList').append(`<li>${record.title} by ${record.artist} 
                recorded in ${record.year} and costs $${record.cost}.</li>`);
        }
        for(let record of response) {
            $('#recordTable').append(`<tr><td>${record.title}</td>
                <td>${record.artist}</td><td>${record.year}</td>
                <td>${record.cost}</td></tr>`);
        }
    });
}

function addNew() {
    const newObject = {};
    newObject.title = $('#title').val();
    newObject.artist = $('#artist').val();
    newObject.year = $('#year').val();
    newObject.cost = $('#cost').val();
    console.log(newObject);
    //AJAX post request
    $.ajax({
        method: "POST",
        url: "/add-record",
        data: newObject
    })
    .then((response) => {
        console.log(response);
        $('#recordList').empty();
        $('#recordTable').empty();
        getRecords();
    });

    $('input').val(''); 
}