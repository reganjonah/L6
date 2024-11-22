import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {datasource} from './Data';

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [letterType, setLetterType] = useState('Vowels');

    const handleSubmit = () => {
        Alert.alert('Data Imported:', JSON.stringify(datasource));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Letter:"
                maxLength={1}
                value={letter}
                onChangeText={(text) => setLetter(text)}
            />
            <RNPickerSelect
                onValueChange={(value) => setLetterType(value)}
                items={[
                    { label: 'Vowels', value: 'Vowels' },
                    { label: 'Consonants', value: 'Consonants' },
                ]}
                style={pickerSelectStyles}
                value={letterType}
            />
            <Button title="Submit"
                    onPress={()=> {
                        let item = {key: letter};
                        let indexnum = 1;
                        if (letterType == "Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data.push(item);
                        navigation.navigate('Home');
                    }
                    }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        justifyContent: 'top',
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    textInput: {
        borderWidth: 1,
        maxLength: 1,
        borderColor: '#ccc',
    },
});

const pickerSelectStyles = {
    inputIOS: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        color: '#333',
    },
    inputAndroid: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        color: '#333',
    },
};

export default Add;
