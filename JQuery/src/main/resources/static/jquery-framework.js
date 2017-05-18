function addDate(divId) {
	var div = $('#' + divId);
	var monthOptions;
	for (var i = 1; i <= 12; i++) {
		monthOptions += '<option>' + i + '</option>';
	}
	var dayOptions;
	for (var i = 1; i <= 31; i++) {
		dayOptions += '<option>' + i + '</option>';
	}
	var yearOptions;
	for (var i = new Date().getFullYear(); i >= 1900; i--) {
		yearOptions += '<option>' + i + '</option>';
	}
	div.append('Month<select>' + monthOptions + '</select>');
	div.append('Day<select>' + dayOptions + '</select>');
	div.append('Year<select>' + yearOptions + '</select>');
}
function addRow(tableId, columnValues) {
	var table = $('#' + tableId);
	var tr = $('<tr>');
	table.append(tr);
	for (var i = 0; i < columnValues.length; i++) {
		tr.append('<td>' + columnValues[i] + '</td>');
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
			columnNames.push('Select');
			for (columnName in responseData) {
				columnNames.push(columnName);
			}
			addRow(tableId, columnNames);
			// Add ASC and DESC Buttons
			var buttons = new Array();
			for (var i = 0; i < columnNames.length; i++) {
				var buttonHtml = '<input type="button" value="ASC" id="asc_' + columnName[i] +'"/><input type="button" value="DESC" id="desc_' + columnName[i] + '"/>';
				buttons.push(buttonHtml);
			}
			addRow(tableId, buttons);
			// Add Data
			for (var i = 0; i < responseDataList.length; i++) {
				responseData = responseDataList[i];
				var columnValues = new Array();
				columnValues.push('<input type="checkbox" id="row_' + i +'"/>');
				for (var j = 1; j < columnNames.length; j++) {
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