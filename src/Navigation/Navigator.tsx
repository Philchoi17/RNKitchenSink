import React, {useState} from "react"
import {NavigationContainer} from "@react-navigation/native"

import AuthStack from "./AuthStack"

const Navigator = () => {
	const [user, setUser] = useState<null | any>(null)

	return (
		<NavigationContainer>{user ? null : <AuthStack />}</NavigationContainer>
	)
}

export default Navigator
