import styled from "styled-components";

export const Container = styled.div`

	width: 100%;
	height: 100vh;
	background: #1c232c;
	display: flex;
	align-items: center;
	justify-content: center;

	.card{
		display: grid;
		background: #9063cb;
		max-width: 300px;
		padding: 50px;
		border-radius: 22px;

		a{
			text-decoration: none;
			font-weight: bold;
			color: #222;
			font-family: "Roboto", sans-serif;
			margin-top: 10px;
			transition: 0.5s;
		}

		a:hover{
			color: #fff;
		}

		h2{
			font-size: 35px;
			font-weight: bold;
			text-align: center;
			font-family: 'Roboto',sans-serif;

		}

		form{
			input{
				width: 100%;
				margin: 8px 0;
				border-radius: 12px;
				padding: 10px;
				border: none;
				text-align: center;
			}
			#register__button{
				text-transform: uppercase;
				font-weight: bold;
				border: none;
				background: #fff;
				cursor: pointer;
				transition: 0.5s;
				width: 200px;
				padding: 7px;
				&:hover{
					background: #1c232c;
					color: #fff;
				}
			}
		}
	}

`