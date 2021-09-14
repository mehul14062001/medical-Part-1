import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, Alert } from 'react-native';
import { Button } from 'react-native-paper';


const Symptoms = ({ navigation, route }) => {

    const [selectedRunningNose, setSelectedRunningNose] = useState();
    const [selectedSneeze, setSelectedSneeze] = useState();
    const [selectedCough, setSelectedCough] = useState();
    const [selectedWheeze, setSelectedWheeze] = useState();
    const [selectedHeadache, setSelectedHeadache] = useState();
    const [selectedItch, setSelectedItch] = useState();
    const [selectedSwell, setSelectedSwell] = useState();
    const [selectedRedRashes, setSelectedRedRashes] = useState();
    return (
        <ScrollView>
            <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Running Nose</Text>
                <Picker
                    selectedValue={selectedRunningNose}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedRunningNose(itemValue)
                    }>
                    <Picker.Item label="KR" value="KR" />
                    <Picker.Item label="NR" value="NR" />
                    <Picker.Item label="LR" value="LR" />
                    <Picker.Item label="MR" value="MR" />
                    <Picker.Item label="HR" value="HR" />
                </Picker>
            </View>
            <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Sneeze</Text>
                <Picker
                    selectedValue={selectedSneeze}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSneeze(itemValue)
                    }>
                    <Picker.Item label="KR" value="KR" />
                    <Picker.Item label="NR" value="NR" />
                    <Picker.Item label="LR" value="LR" />
                    <Picker.Item label="MR" value="MR" />
                    <Picker.Item label="HR" value="HR" />
                </Picker>
            </View>
            <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Cough</Text>
                <Picker
                    selectedValue={selectedCough}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedCough(itemValue)
                    }>
                    <Picker.Item label="KR" value="KR" />
                    <Picker.Item label="NR" value="NR" />
                    <Picker.Item label="LR" value="LR" />
                    <Picker.Item label="MR" value="MR" />
                    <Picker.Item label="HR" value="HR" />
                </Picker>
            </View>
            <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Wheeze</Text>
                <Picker
                    selectedValue={selectedWheeze}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedWheeze(itemValue)
                    }>
                    <Picker.Item label="KR" value="KR" />
                    <Picker.Item label="NR" value="NR" />
                    <Picker.Item label="LR" value="LR" />
                    <Picker.Item label="MR" value="MR" />
                    <Picker.Item label="HR" value="HR" />
                </Picker>
            </View>
            <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Headache</Text>
                <Picker
                    selectedValue={selectedHeadache}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedHeadache(itemValue)
                    }>
                    <Picker.Item label="KR" value="KR" />
                    <Picker.Item label="NR" value="NR" />
                    <Picker.Item label="LR" value="LR" />
                    <Picker.Item label="MR" value="MR" />
                    <Picker.Item label="HR" value="HR" />
                </Picker>
            </View>
            <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Itch</Text>
                <Picker
                    selectedValue={selectedItch}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedItch(itemValue)
                    }>
                    <Picker.Item label="KR" value="KR" />
                    <Picker.Item label="NR" value="NR" />
                    <Picker.Item label="LR" value="LR" />
                    <Picker.Item label="MR" value="MR" />
                    <Picker.Item label="HR" value="HR" />
                </Picker>
            </View>
            <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Swell</Text>
                <Picker
                    selectedValue={selectedSwell}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSwell(itemValue)
                    }>
                    <Picker.Item label="KR" value="KR" />
                    <Picker.Item label="NR" value="NR" />
                    <Picker.Item label="LR" value="LR" />
                    <Picker.Item label="MR" value="MR" />
                    <Picker.Item label="HR" value="HR" />
                </Picker>
            </View>
            <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Red Rashes</Text>
                <Picker
                    selectedValue={selectedRedRashes}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedRedRashes(itemValue)
                    }>
                    <Picker.Item label="KR" value="KR" />
                    <Picker.Item label="NR" value="NR" />
                    <Picker.Item label="LR" value="LR" />
                    <Picker.Item label="MR" value="MR" />
                    <Picker.Item label="HR" value="HR" />
                </Picker>
            </View>
            <Button style={{ backgroundColor: "green" }}>
                Save
            </Button>

        </ScrollView>
    );
}

export default Symptoms;