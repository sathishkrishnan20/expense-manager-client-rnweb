import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Platform, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Text, Card,
  Title,
  Paragraph,
  List,
 } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExpenseList from './src/pages/expenses';
import AddExpense from './src/pages/expenses/add';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  const title = 'something';
  const content = 'someconten';
  return (
  <TouchableOpacity
    onPress={() =>
      navigation?.push('Details', {
        title,
        content,
      })
    }
  >
    <Card>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  </TouchableOpacity>
  )
};

const DetailsScreen = (props:any) => {
  const { title, content } = props?.route?.params;
  return (
    <List.Section>
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
};


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ExpenseList} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="add-expense" component={AddExpense} />
          </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
