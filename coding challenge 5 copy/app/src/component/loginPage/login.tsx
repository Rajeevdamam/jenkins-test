import React, { useState } from "react";
import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import mylogin from "../../images/Login-amico.svg";
import "./login.css";
import { Alert } from "antd";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/services";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
	let [data, setData] = useState({
		userName: "",
		password: "",
	});
	const state = useSelector((state: any) => state.user);
	const dispatch = useDispatch();
	const history = useHistory();
	const handleChange = (e: any) => {
		let name = e.target.name;
		let value = e.target.value;
		setData({ ...data, [name]: value });
	};
	const useStyles = makeStyles((theme) => ({
		margin: {
			display: "block",
			margin: "1vw 0vw",
			width: 250,
			marginLeft: "auto",
			marginRight: "auto",
		},
	}));
	const classes = useStyles();

	const login = async (e: any) => {
		e.preventDefault();
		let result: any = await loginUser(data);
		if (result) {
			console.log(result);
			console.log("Login sccessful");
			dispatch(result);
			history.push("/home");
		} else {
			history.push("/error");
		}
	};
	console.log("login page");

	return (
		<div className="page">
			<div className="secure-login-svg">
				<img src={mylogin} alt="login"></img>
			</div>
			<Alert
				message="Registration Successfull"
				type="success"
				showIcon
				closable
			/>
			<form onSubmit={login} className="login-form">
				<Container className="container">
					<h2
						style={{
							textAlign: "center",
							marginBottom: "10%",
							fontSize: "250%",
							color: "#0d00ff",
						}}
					>
						LOGIN
					</h2>
					<TextField
						label="User name"
						name="userName"
						autoComplete="off"
						type="text"
						onChange={handleChange}
						className={classes.margin}
						required
						value={data.userName}
						fullWidth
					/>
					<TextField
						label="Password"
						name="password"
						autoComplete="off"
						type="password"
						onChange={handleChange}
						className={classes.margin}
						value={data.password}
						required
						fullWidth
					/>
					<Button
						variant="contained"
						size="large"
						color="primary"
						type="submit"
						className="button"
					>
						Login
					</Button>
					<div style={{ margin: "10px auto" }}>
						{"Not a user? "}
						<Link to="/signup" className="link">
							Sign Up
						</Link>
					</div>
				</Container>
			</form>
		</div>
	);
}
