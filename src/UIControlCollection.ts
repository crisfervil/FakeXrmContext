class UIControlCollection extends Collection<UIControl>{

	/** adds a controls bound to the specified attribute in the UI */
	add(controlName: string, control: UIControl) {
		return super.add(controlName, control);
	}
}