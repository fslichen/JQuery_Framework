function addRow(tableId, columnValues) {
	var table = $('#' + tableId);
	var tr = $('<tr>');
	table.append(tr);
	for (var j = 0; j < columnValues.length; j++) {
		tr.append('<td>' + columnValues[j] + '</td>');
	}
}
function post(stringUrl, requestData, tableId) {
	$.ajax({
		type : 'POST',
		contentType : 'application/json',
		url : stringUrl,
		data : JSON.stringify(requestData),
		success : function(responseDataList) {
			// Define Columns
			var responseData = responseDataList[0];
			var columnNames = new Array();
			for (columnName in responseData) {
				columnNames.push(columnName);
			}
			addRow(tableId, columnNames);
			// Add Data
			for (i in responseDataList) {
				responseData = responseDataList[i];
				var columnValues = new Array();
				for (j in columnNames) {
					columnValues.push(responseData[columnNames[j]]);
				}
				addRow(tableId, columnValues);
			}
		}, 
		error : function() {
			alert('Error');
		}
	});		
}