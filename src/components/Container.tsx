import React from 'react';
import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';

function Container ({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
    container: {
      flexGrow: 1
    }
  });
  
  export default Container;