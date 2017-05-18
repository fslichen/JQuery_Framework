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
			// Add Buttons
			var buttons = new Array();
			for (columnName in responseData) {
				var buttonHtml = '<input type="button" value="ASC" id="asc_' + columnName +'"/><input type="button" value="DESC" id="desc_' + columnName + '"/>';
				buttons.push(buttonHtml);
			}
			addRow(tableId, buttons);
			// Add Data
			for (var i = 0; i < responseDataList.length; i++) {
				responseData = responseDataList[i];
				var columnValues = new Array();
				for (var j = 0; j < columnNames.length; j++) {
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