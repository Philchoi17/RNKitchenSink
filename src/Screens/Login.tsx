import React from "react"
import {Div, Text, Button, Input} from "react-native-magnus"

const Login = () => {
	return (
		<Div flex={1} alignItems="center" justifyContent="center">
			<Input />
			<Input />

			<Div row>
				<Button>login</Button>
				<Button>register</Button>
			</Div>
		</Div>
	)
}

export default Login
