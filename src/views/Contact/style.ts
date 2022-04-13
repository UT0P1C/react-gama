import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
background-color: #777;
justify-content: center;
align-items: center;


.form-wrapper{
	display: grid;

	.card{
		background-color: #fff;
		padding: 22px;
		border-radius: 22px;

		form{
			display: grid;
			input{
				margin: 10px 0;
			}
		}
	}
}
`