import { NavigationContainer } from '@react-navigation/native';

import AppButton from './app/components/AppButton';
import AuthNavigator from './app/navigation/AuthNavigator';
import ForgotPassword from './app/screens/ForgotPassword';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

