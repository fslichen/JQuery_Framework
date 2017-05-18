function pagination(pageIndex, rowCount) {
	var pageSize = 20;
	return [(pageIndex - 1) * pageSize, Math.min(pageIndex * pageSize, rowCount)];
}
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
function addPagination(divId) {
	var div = $('#' + divId);
	div.append('<input type="button" value="Previous" id="' + divId +'_previous"/>');
	div.append('<input type="button" value="Next" id="' + divId +'_next"/>');
	div.append('<input type="text" value="1" id="' + divId +'_current"/>');
	div.append('<input type="button" value="Search" id="' + divId +'_search"/>');
}
function initializeTable(tableId) {
	var div = $('#' + tableId);
	// Start Time and End Time
	div.append('<div id="' + tableId + '_start_time" style="float:left"/>');
	addDate(tableId + '_start_time');
	div.append('<div id="' + tableId + '_end_time"/>');
	addDate(tableId + '_end_time');
	// Table
	div.append('<table><tbody></tbody></table>');
	// Pagination
	div.append('<div id="' + tableId + '_pagination"></div>');
	addPagination(tableId + '_pagination');
}
function addRow(tableId, columnValues) {
	var tbody = $('#' + tableId + ">table>tbody");
	var tr = $('<tr>');
	tbody.append(tr);
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
			// Delete Previous Data
			if ($('#' + tableId + '>table>tbody').children('tr').length > 0) {
				alert('Previous data exists.');
			} else {
				alert('Previous data does not exist.');
			}
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
			var indexes = pagination($('#' + tableId + '_pagination_current').val(), responseDataList.length);
			for (var i = indexes[0]; i < indexes[1]; i++) {
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