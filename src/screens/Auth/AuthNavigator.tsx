import { AuthStackParamList } from "@/utils/types";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Signin from "./Signin";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";

const AuthStack = createSharedElementStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
