function quickSort(array) {
	return sort(0, array.length - 1, array);
}
function sort(beginIndex, endIndex, array) {
	if (beginIndex < 0 || endIndex >= array.length || beginIndex >= endIndex) {
		return;
	}
	var i = beginIndex;
	var j = endIndex;
	var pivot = array[i];
	while (i < j) {
		while (i < j && array[i] < pivot) {
			i++;
		}
		while (i < j && array[j] > pivot) {
			j--;
		}
		if (i < j) {
			if (array[i] == array[j]) {
				i++;
			} else {
				var t = array[i];
				array[i] = array[j];
				array[j] = t;
			}
		} 
		if (i == j) {
			sort(beginIndex, i - 1, array);
			sort(j + 1, endIndex, array);
		}
	}
}