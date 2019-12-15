import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-basis: 4fr;

	max-width: 1000px;
	margin: 0 auto;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-basis: 1fr;

		margin-top: 50px;
		margin-bottom: 200px;
		box-shadow: 0.1px 0.1px 3px gray;

		svg {
			margin-top: 100px;
			color: #18acc4;
			width: 45px;
			height: 45px;
		}

		h3 {
			margin-top: 35px;
		}

		p {
			text-align: center;
			margin: 5px 30px 90px 30px;
			font-size: 10px;
			color: gray;
		}
	}
`;
