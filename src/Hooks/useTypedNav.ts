import { useNavigation } from "@react-navigation/native"

const useTypedNav = () => {
	const navigation = useNavigation<any>()
	const navigateTo = (routeName: any, params?: any) => {
		return () => {
			navigation.navigate(routeName, params)
		}
	}

	return {
		...navigation,
		navigateTo,
	}
}

export default useTypedNav
