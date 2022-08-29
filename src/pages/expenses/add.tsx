import React from 'react';
import { Container } from '../../components';
import { GestureResponderEvent, KeyboardTypeOptions, TouchableOpacity, View, ScrollView } from 'react-native';
import { Text, TextInput, Modal, Portal, Button, Card, Dialog, Paragraph, IconButton, MD3Colors } from 'react-native-paper'
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Categories } from '../../__mocks/categories';
import { COLROS } from '../../config/constants';



function AddExpense({ animateFrom, style }: any) {
    const [visible, setVisible] = React.useState(false);
    const [isExpense, setAsExpense] = React.useState(true);
    const [addCategoryModalVisible, setAddCategoryModalVisible] = React.useState(false);
    const [newCategoryText, setNewCategoryText] = React.useState('')
    const onButtonToggle = (value: boolean) => {
        setAsExpense(value)
    };
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const AddInputRow = ({ name, inputLabel, keyboardType, disableInput = false, onPress  }: { name: string, inputLabel: string, keyboardType?: KeyboardTypeOptions, disableInput?: boolean, onPress?:(props: GestureResponderEvent) => void }) => {
        return (
            <View style={[{ flex: 1, flexDirection: "row", marginTop: 2, }]}>
                
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', height: 48, flexDirection: 'row' }}>     
                    <Text style={{ marginTop: disableInput ? 0: 8, color: '#49454F' }} variant='titleMedium'> {name} </Text>
                    {disableInput ? 
                        <IconButton
                            icon="plus-circle"
                            iconColor={COLROS.PRIMARY_COLOR}
                            size={24}
                            onPress={() => setAddCategoryModalVisible(true)}
                        /> : null}
                </View>
                
                {disableInput ? 
                    
                    <TouchableOpacity onPress={onPress} style={{ flex: 2, marginTop: 4, alignContent: 'center', justifyContent: 'center' , height: 48, backgroundColor: 'white', borderColor: '#79747E', borderWidth: 1, borderRadius: 4 }}>     
                        <Text style={{ marginTop: 4, color: '#49454F', fontWeight: 'normal', paddingLeft: 8 }} variant='titleMedium'> {name} </Text>
                    </TouchableOpacity> 
                    :
                    <TextInput
                        mode="outlined"
                        label={inputLabel}
                        keyboardType={keyboardType || 'default'}
                        placeholder={inputLabel}
                        disabled={disableInput}
                        style={{ flex: 2, height: 48 }}
                    />
                }
            </View>
        )
    }

    function AddExpenseIncomeToggle() {
        return (
            <View style={{ display: 'flex', flexDirection: 'row' }}> 
                <View style={{ flex: 1 }}>
                    <Button icon="bank" labelStyle={{ color: 'white' }} style={isExpense ? { backgroundColor: COLROS.PRIMARY_COLOR  } : { backgroundColor: 'grey' }} disabled={isExpense} mode="contained" onPress={() => setAsExpense(!isExpense)}>
                        Expenses
                    </Button>
                </View>
                <View style={{ flex: 1 }}>
                    <Button icon="wallet" labelStyle={{ color: 'white' }} style={!isExpense ? { backgroundColor: COLROS.PRIMARY_COLOR } : { backgroundColor: 'grey' }} disabled={!isExpense} mode="contained" onPress={() => setAsExpense(!isExpense)}>
                        Income
                    </Button>
                </View>
            </View>
        )
    }

    function AddNewCatagoryModal() {
        return (
            <Portal>
                <Dialog visible={addCategoryModalVisible} onDismiss={() => setAddCategoryModalVisible(false)}>
                    <Dialog.Content>
                        <TextInput
                            label="Category"
                            value={newCategoryText}
                            onChangeText={text => setNewCategoryText(text)}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setAddCategoryModalVisible(false)}>Cancel</Button>
                        <Button onPress={() => setAddCategoryModalVisible(false)}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        )
    }

    return (
        <Container>
            <View style={{ margin: 8 }}>    
                <Text style={{ marginTop: 8 }} variant="titleMedium">Add Expense </Text>
                
                <AddExpenseIncomeToggle />

                <AddInputRow name={"Amount ₹"} inputLabel={'Enter Amount'} keyboardType={'number-pad'} />
                <AddInputRow name={isExpense ? 'Payee': 'Payer'} inputLabel={isExpense ? 'Enter Payee' : 'Enter Payer'} />
                <AddInputRow name={'Category'} disableInput inputLabel={'Select Category'} onPress={showModal}/>
                <AddInputRow name={'Description'} inputLabel={'Description...'}/>
            
                <Button mode="contained" style={{ marginTop: 16 }} onPress={showModal}>Add</Button>
      
                <Portal>
                        
                    <Dialog visible={visible} onDismiss={hideModal}>
                        <Dialog.ScrollArea>
                            <ScrollView>
                                <Dialog.Actions style={{ justifyContent: 'flex-start' }} >

                                    <View style={[{ flex: 1, flexDirection: "row", marginTop: 2, }]}>
                                        {Categories.map((cat, index) => (
                                            <Button style={{ alignItems: 'flex-start' }} key={'catagories-' + index} onPress={() => {
                                                console.log(cat.categoryId)
                                                hideModal()
                                            }}>{cat.categoryName}</Button>
                                        ))}
                                    </View>
                                </Dialog.Actions>

                                <Dialog.Actions style={{ justifyContent: 'flex-start' }}>
                                    <View style={[{ display: 'flex', flexDirection: "column", marginTop: 2, }]}>
                                        
                                    <TextInput
                                        label="Email"
                                        value={'text'}
                                        style={{ flex: 2, alignItems: 'flex-start'}}
                                        onChangeText={text => console.log(text)}
                                        />
                                        <Button style={{ alignItems: 'flex-start' }} key={'catagories-'} onPress={() => {
                                                console.log('cat.categoryId')
                                               
                                        }}>{'Add'}</Button>
                                    </View>
                                </Dialog.Actions>
                                
                            </ScrollView>
                        </Dialog.ScrollArea>
                    </Dialog>
                </Portal>
            
                <AddNewCatagoryModal />

            </View>  
        </Container>
    )
}

export default AddExpense;