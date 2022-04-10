import React from 'react';
import styled from 'styled-components';

const MoreAboutItem = ({ question, answer, single }) => {
	return (
		<MoreWrap style={single ? { paddingTop: '61px' } : null}>
			<MoreAnswer>{answer}</MoreAnswer>
			<Divider></Divider>
			<MoreQuestion>{question}</MoreQuestion>
		</MoreWrap>
	);
};

export default MoreAboutItem;

const MoreWrap = styled.div``;

const MoreAnswer = styled.h3`
	margin-top: 0px;
	margin-bottom: 0.5rem;
	color: #f8f2dc;
	font-size: 4.25rem;
	line-height: 0.9;
	text-align: center;
	letter-spacing: 4px;
	font-family: 'Qwitcher Grypen', sans-serif;
	text-transform: capitalize;
`;

const Divider = styled.div`
	height: 5px;
	border-radius: 2rem;
	background-color: #f8f2dc;
`;

const MoreQuestion = styled.p`
	margin-top: 0.5rem;
	margin-bottom: 0px;
	color: #f8f2dc;
	font-size: 1.25rem;
	line-height: 1.25;
	text-align: center;
`;
