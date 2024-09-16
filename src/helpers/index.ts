export const onCopy = (copyText: string, title:string) => {
	navigator.clipboard.writeText(copyText);
	alert(`${title}: ${copyText} copied`)
};

export const addressToShow = (addressString:string) => {
	if (addressString) {
		return addressString.slice(0, 6) + "..." + addressString.slice(-4);
	};
	return ''
};