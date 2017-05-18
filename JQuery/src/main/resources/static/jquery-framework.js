function addRow(tableId, columnValues) {
	var table = $('#' + tableId);
	var tr = $('<tr>');
	table.append(tr);
	for (var j = 0; j < columnValues.length; j++) {
		tr.append('<td>' + columnValues[j] + '</td>');
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
			alert(returnData.name);
		}, 
		error : function() {
			alert('Error');
		}
	});			
}