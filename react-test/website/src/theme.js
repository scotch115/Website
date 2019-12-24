const themeLight = {
	primaryColor: 'white',
	fontColor: 'black',
	blockBackground: 'white',
	borderColor: 'black',
	invert: 'invert(1)',
}

const themeDark = {
	primaryColor: '#353D3F',
	fontColor: 'white',
	blockBackground: '#353D3F',
	borderColor: 'white',
	invert: 'invert(0)',
}

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
