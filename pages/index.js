import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import MoreAboutItem from '../components/MoreAboutItem';
import { Container, Main, Section } from '../styles/Layouts';

export default function Home() {
	return (
		<>
			<Head>
				<title>Cami ten Napel | Public Relations</title>
				<meta
					name='description'
					content='Hi there. I’m Cami ten Napel — a public relations student at the University of Oklahoma.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Main>
				<Section>
					<Container>
						<HeroGrid>
							<HeroImageWrap>
								<Image
									src='/FullSizeRender.jpeg'
									layout='fill'
									objectFit='cover'
								/>
							</HeroImageWrap>
							<HeroTextWrap>
								<HeroTitle>Hi there.</HeroTitle>
								<p>
									<AboutSpan>Who I am:</AboutSpan> I’m Cami
									ten Napel — a public relations student at
									the University of Oklahoma.
									<br />
									<br />
									<AboutSpan>How I got here:</AboutSpan> A
									lifelong passion for creativity, culture and
									community led me to the world of public
									relations. I’ve seen these three things
									flourish most through unique brands and
									individuals, and have discovered a passion
									for championing these creators.
									<br />
									<br />
									<AboutSpan>Where I'm going:</AboutSpan>
									Through previous internships and jobs, I’ve
									learned my strengths are in writing,
									creating, leading and connecting. Any
									opportunity to use these strengths while
									also developing new ones is something I am
									seeking out. Working with new people, in a
									new environment to learn new skills, is
									exciting to me.
								</p>
							</HeroTextWrap>
						</HeroGrid>
					</Container>
				</Section>
				<Section style={{ backgroundColor: 'var(--brown-color)' }}>
					<Container>
						<SectionTitle
							style={{
								textAlign: 'center',
								color: 'var(--tan-color)',
							}}
						>
							A little more about&nbsp;me...
						</SectionTitle>
						<MoreAboutWrap>
							<MoreAboutItem
								question='Go-To Coffee Order'
								answer='Iced Vanilla Latte +&nbsp;Oat&nbsp;Milk'
							/>
							<MoreAboutItem
								question='Favorite Travel Destination'
								answer='Amsterdam'
								single
							/>
							<MoreAboutItem
								question='Favorite TV Show'
								answer='New Girl'
								single
							/>
							<MoreAboutItem
								question='Favorite Book'
								answer='The Ruthless Elimination Of&nbsp;Hurry'
							/>
						</MoreAboutWrap>
					</Container>
				</Section>
				<Section id='contact'>
					<Container>
						<FlexContent>
							<ContactForm />
							<ContactImage>
								<img src='/CamitenNapel_Logo.jpeg' />
							</ContactImage>
						</FlexContent>
					</Container>
				</Section>
			</Main>
		</>
	);
}

const HeroImageWrap = styled.div`
	position: relative;
	padding-top: 100%;
`;

const HeroTextWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const HeroTitle = styled.h1`
	font-size: 3rem;
	line-height: 1.25;
	font-weight: 700;
`;

const AboutSpan = styled.span`
	color: var(--highlight-color);
`;

const HeroGrid = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	grid-template-columns: 0.8fr 1.1fr;

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

const SectionTitle = styled.h2`
	font-size: 3rem;
	line-height: 1.25;
	font-weight: 700;
`;

const MoreAboutWrap = styled.div`
	display: grid;
	width: 85%;
	margin-top: 2rem;
	margin-right: auto;
	margin-left: auto;
	padding: 8rem 3rem;
	grid-auto-columns: 1fr;
	grid-column-gap: 2rem;
	grid-row-gap: 4rem;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	border-radius: 0.5rem;
	background-color: #4d6878;
	color: #fff;

	@media screen and (max-width: 767px) {
		width: 100%;
		padding-top: 6rem;
		padding-bottom: 6rem;
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
		grid-template-columns: 1fr;
	}
`;

const FlexContent = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 767px) {
		flex-direction: column-reverse;
	}
`;

const ContactImage = styled.div`
	width: 35%;

	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;
