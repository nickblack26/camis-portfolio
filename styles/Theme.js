import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	@font-face {
		@import url('https://fonts.googleapis.com/css2?family=Belleza&family=Qwitcher+Grypen:wght@400;700&display=swap');
	}

	* {
		margin: 0;
		box-sizing: border-box;
		--body-color: #f8f2dc;
		--highlight-color: #81adc8;
		--text-color: #4d6878;
		--tan-color: #f8f2dc;
		--brown-color: #9e6240;
	}

	body {
		background-color: #f8f2dc;
		color: #4d6878;
		font-size: 16px;
		font-family: 'Belleza', sans-serif;
	}

	p {
		line-height: 1.25;
	}
`;
