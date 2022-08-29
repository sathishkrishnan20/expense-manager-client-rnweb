import * as React from 'react';
import {
    StyleProp,
    ViewStyle,
    Animated,
    StyleSheet,
    Platform,
    View,
    ScrollView,
  } from 'react-native';

  import { FAB } from 'react-native-paper';
import { Container, Table } from '../../components';
import { navigate } from '../../util/navigation';
import { Categories } from '../../__mocks/categories';



const optionsPerPage = [2, 3, 4];
const ExpenseList = ({ navigation }: any) => {
    const [isExtended, setIsExtended] = React.useState(true);
   

  return (
    <>
        <Container>
            <Table headers={[ {
                name: 'Category Id',
                node: 'categoryId',
            },
            {
                name: 'Category Name',
                node: 'categoryName',
            }]}
            data={Categories} 
            /> 
        </Container>      
            
        <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => navigate(navigation, 'add-expense')}
        />
    </>
     
  );
};

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
})
export default ExpenseList;