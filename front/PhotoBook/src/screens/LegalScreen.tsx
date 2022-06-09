import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LegalScreen = () => {
    return(
        <View style={styles.mainContainer}>
          <Text style={styles.grosTexte}>LegalScreen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003b6f',
    height: '100%'
  },
  grosTexte: {
    color: 'white',
    fontSize: 40
  }
});
export default LegalScreen;