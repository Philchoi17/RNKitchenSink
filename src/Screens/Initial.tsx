import React from "react"
import { Div, Text, Button } from "react-native-magnus"

import useTypedNav from "../Hooks/useTypedNav"

const Initial = () => {
  const { navigateTo } = useTypedNav()

  return (
    <Div flex={1} alignItems="center" justifyContent="center">
      <Div>
        <Text>Initla</Text>
      </Div>

      <Div row>
        <Button onPress={navigateTo("Login")}>login</Button>
        <Button>register</Button>
      </Div>
    </Div>
  )
}

export default Initial
