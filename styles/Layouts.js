import styled from 'styled-components';

export const Main = styled.main``;

export const Section = styled.section`
	padding: 3rem 0rem;
`;

export const Container = styled.div`
	max-width: 1360px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 1rem;
	padding-left: 1rem;
`;

export const GridHalves = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

export const GridThirds = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	grid-template-columns: 1fr 1fr 1fr;

	@media (max-width: 991px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

export const GridFourths = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	@media (max-width: 991px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;
