function addColumns(columnNames) {
	var td = $('table').append('<thead><tr></tr></thead>');
	for (var j = 0; j < columnNames.length; j++) {
		td = td.append('<td>' + columnNames[j] + '</td>');
	}
}
function addRow(columnValues) {
	var td = $('table').append('<tbody><tr></tr></tbody>');
	for (var j = 0; j < columnValues.length; j++) {
		td = td.append('<td>' + columnValues[j] + '</td>');
	}
}
function post(stringUrl, objectData) {
	$.ajax({
		type : 'POST',
		contentType : 'application/json',
		url : stringUrl,
		data : JSON.stringify(objectData),
		success : function(returnData) {
			alert('Success');
		}, 
		error : function() {
			alert('Error');
		}
	});			
}