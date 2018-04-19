console.log('JS is sourced');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery is here');
    getRecords();
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