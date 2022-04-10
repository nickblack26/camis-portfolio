import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
	return (
		<ContactWrap>
			<ContactHeading>Contact me</ContactHeading>
			<ContactBlock>
				<div>
					<ContactLabel>Name</ContactLabel>
					<ContactInput type='text' required />
				</div>
				<div>
					<ContactLabel>Email Address</ContactLabel>
					<ContactInput type='email' required />
				</div>
				<FullSize>
					<ContactLabel>Subject</ContactLabel>
					<ContactInput type='text' required />
				</FullSize>
				<FullSize>
					<ContactLabel>Message</ContactLabel>
					<ContactTextArea
						maxLength='5000'
						name='Message'
						required
					></ContactTextArea>
				</FullSize>
				<SubmitButton type='Submit' value='Submit' />
			</ContactBlock>
		</ContactWrap>
	);
};

export default ContactForm;

const ContactWrap = styled.div`
	width: 60%;

	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

const ContactBlock = styled.form`
	display: grid;
	grid-auto-columns: 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

const ContactInput = styled.input`
	display: block;
	width: 100%;
	height: 38px;
	padding: 8px 12px;
	margin-bottom: 10px;
	font-size: 14px;
	line-height: 1.42857143;
	color: #333333;
	background-color: #ffffff;
	border: 1px solid #cccccc;
`;

const ContactLabel = styled.label`
	display: block;
	margin-bottom: 0.25rem;
	font-weight: bold;
`;

const ContactTextArea = styled.textarea`
	display: block;
	width: 100%;
	height: auto;
	padding: 8px 12px;
	margin-bottom: 10px;
	font-size: 14px;
	line-height: 1.42857143;
	color: #333333;
	background-color: #ffffff;
	border: 1px solid #cccccc;
`;

const ContactHeading = styled.h3`
	font-size: 32px;
	line-height: 36px;
	margin-top: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const SubmitButton = styled.input`
	display: inline-block;
	padding: 9px 15px;
	border: 0;
	line-height: inherit;
	text-decoration: none;
	cursor: pointer;
	border-radius: 0;
	border-style: solid;
	border-width: 1px;
	border-color: #5e5450;
	background-color: transparent;
	color: #5e5450;
	-webkit-appearance: button;
`;

const FullSize = styled.div`
	grid-row-start: span 1;
	grid-row-end: span 1;
	grid-column-start: span 2;
	grid-column-end: span 2;

	@media (max-width: 767px) {
		grid-column-start: span 1;
		grid-column-end: span 1;
	}
`;
