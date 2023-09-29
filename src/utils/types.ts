import { ImageSourcePropType } from "react-native";

interface SLIDE_TYPE {
  id: string;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  w: number;
  h: number;
}

type StackParamList = {
  Auth: undefined;
  Tabs: undefined;
};

type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
  ResetPassword: undefined;
};

type TabParamList = {
  Home: undefined;
  Transaction: undefined;
  Setting: undefined;
  QRScanner: undefined;
};

export { SLIDE_TYPE, StackParamList, AuthStackParamList, TabParamList };
