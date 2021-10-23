$(document).ready(function () {
    $("#userTable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/api/Users/GetUsers",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "id", "name": "Id", "autoWidth": true },
            { "data": "firstName", "name": "First Name", "autoWidth": true },
            { "data": "lastName", "name": "Last Name", "autoWidth": true },
            { "data": "contact", "name": "Country", "autoWidth": true },
            { "data": "email", "name": "Email", "autoWidth": true },
            { "data": "address", "name": "Address", "autoWidth": true },
            
        ]
    });
});  

