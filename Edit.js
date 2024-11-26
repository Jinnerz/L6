import React, {useState} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {datasource} from './Data.js';

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);

    return(
        <View>
            <View>
                <Text>Letter:</Text>
                <TextInput style={{borderWidth: 1}} maxLength={1} value={letter} onChangeText={(text) => setLetter(text)} />
            </View>

            <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-around', gap: 10}}>
                <View style={{flex: 1}}>
                    <Button title="Save"
                            onPress={() => {
                                let indexnum = 1
                                if (route.params.type === "Vowels") {
                                    indexnum = 0;
                                }
                                datasource[indexnum].data[route.params.index].key = letter;
                                navigation.navigate("Home");
                            }
                        }
                    />
                </View>

                <View style={{flex: 1}}>
                    <Button title="Delete"
                            onPress={() => {
                                let indexnum = 1
                                if (route.params.type === "Vowels") {
                                    indexnum = 0;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text: 'Yes', onPress: () => {
                                        datasource[indexnum].data.splice(route.params.index, 1);
                                        navigation.navigate("Home");
                                        }},
                                        {text: 'No'}])
                            }
                    }
                    />
                </View>

            </View>
        </View>
    )
}

export default Edit;
