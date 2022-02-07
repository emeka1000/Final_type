import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomepageScreen from "../screens/HomepageScreen";
import SigninScreen from "../screens/SigninScreen";

const LoginNavigation = createStackNavigator({
    SignIn: {
        screen: SigninScreen,
        navigationOptions: {
            header: () => false,
        },
    },
    TaskManager: {
        screen: HomepageScreen,
    },
});

export default createAppContainer(LoginNavigation);