import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { datasource } from './Data';

const Edit = ({ route, navigation }) => {
    const { index, type, key } = route.params;

    const sectionIndex = datasource.findIndex((section) => section.title === type);

    const [letter, setLetter] = useState(key);

    const handleSave = () => {
        if (sectionIndex !== -1) {
            datasource[sectionIndex].data[index].key = letter;
            Alert.alert('Success', 'Letter updated successfully');
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Unable to find section');
        }
    };

    const handleDelete = () => {
        Alert.alert(
            'Confirm Deletion',
            `Are you sure you want to delete "${key}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        if (sectionIndex !== -1) {
                            datasource[sectionIndex].data.splice(index, 1);
                            Alert.alert('Success', 'Letter deleted successfully');
                            navigation.navigate('Home');
                        } else {
                            Alert.alert('Error', 'Unable to find section');
                        }
                    },
                },
            ],
        );
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
            <View style={styles.buttonRow}>
                <Button title="Save" onPress={handleSave} />
                <Button title="Delete" onPress={handleDelete} color="red" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Edit;
