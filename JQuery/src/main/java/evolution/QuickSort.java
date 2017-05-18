package evolution;

public class QuickSort {
	public static void main(String[] args) {
		QuickSort e = new QuickSort();
		int[] a = {6, 8, 6, 7, 9};
		e.quickSort(a);
		for (int i = 0; i < a.length; i++) {
			System.out.println(a[i]);
		}
	}
	public void quickSort(int[] array) {
		sort(0, array.length - 1, array);
	}
	public void sort(int beginIndex, int endIndex, int[] array) {
		if (beginIndex < 0 || endIndex >= array.length || beginIndex >= endIndex) {
			return;
		}
		int i = beginIndex;
		int j = endIndex;
		int pivot = array[i];
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
				} else {// Example : {6, 8, 6, 7, 9}
					int t = array[i];
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
}
