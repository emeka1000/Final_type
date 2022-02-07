import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomepageScreen from "../screens/HomepageScreen";
import SigninScreen from "../screens/SigninScreen";
import LoginInput from "../screens/LoginScreen";

const LoginNavigation = createStackNavigator({
    SignIn: {
        screen: SigninScreen,
        navigationOptions: {
            header: () => false,
        },
    },
    TaskManager: HomepageScreen,
    LogIn: LoginInput,
});

export default createAppContainer(LoginNavigation);