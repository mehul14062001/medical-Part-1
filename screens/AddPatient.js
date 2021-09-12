import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { TextInput, RadioButton, Button } from 'react-native-paper';
import { ngrok } from '../ngrok'


const AddPatient = ({ navigation, route }) => {

    const getDetails = (type) => {
        if (route.params) {
            switch (type) {
                case "name": return route.params.name
                case "phone": return route.params.phone
                case "email": return route.params.email
                case "address": return route.params.address
                case "age": return route.params.age
                case "gender": return route.params.gender
            }
        }
        else {
            return ""
        }
    }

    const [Name, setName] = useState(getDetails("name"))
    const [Phone, setPhone] = useState(getDetails("phone"))
    const [Email, setEmail] = useState(getDetails("email"))
    const [Address, setAddress] = useState(getDetails("address"))
    const [Age, setAge] = useState(getDetails("age"))
    const [Gender, setGender] = useState(getDetails("gender"))

    const submitData = () => {
        fetch("https://4702-122-179-62-45.ngrok.io/create", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Name,
                phone: Phone,
                email: Email,
                address: Address,
                age: Age,
                gender: Gender,
            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is saved`)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }

    const updateData = () => {
        fetch("https://4702-122-179-62-45.ngrok.io/update", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: route.params._id,
                name: Name,
                phone: Phone,
                email: Email,
                address: Address,
                age: Age,
                gender: Gender,
            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is updated`)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <View style={styles.details}>
                    <Text style={{ textAlign: "center", fontSize: 30, }}>
                        Details
                    </Text>
                    <TextInput
                        label='Name'
                        style={styles.inputStyle}
                        value={Name}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setName(text)}
                    />
                    <TextInput
                        label='Phone'
                        style={styles.inputStyle}
                        value={Phone}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setPhone(text)}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        label='Email'
                        style={styles.inputStyle}
                        value={Email}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        label='Address'
                        style={styles.inputStyle}
                        value={Address}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setAddress(text)}
                    />
                    <TextInput
                        label='Age'
                        style={styles.inputStyle}
                        value={Age}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setAge(text)}
                        keyboardType="number-pad"
                    />
                    <View style={styles.gender}>
                        <Text style={{ fontSize: 20 }}>
                            Gender
                        </Text>
                        <RadioButton.Group
                            onValueChange={Gender => setGender(Gender)}
                            value={Gender}>
                            <RadioButton.Item
                                label="Male"
                                value="Male" />
                            <RadioButton.Item
                                label="Female"
                                value="Female" />
                        </RadioButton.Group>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Reaction category
                    </Text>
                    <Button style={styles.button} onPress={() => { navigation.navigate("Symptoms") }}>
                        Symptoms
                    </Button>
                    <Button style={styles.button} onPress={() => console.log('Hello')}>
                        Meat and Fish
                    </Button>
                    <Button style={styles.button} onPress={() => console.log('Hello')}>
                        Inhalents
                    </Button>
                    <Button style={styles.button} onPress={() => console.log('Hello')}>
                        Vegitables
                    </Button>
                    <Button style={styles.button} onPress={() => console.log('Hello')}>
                        Fruits
                    </Button>
                    <Button style={styles.button} onPress={() => console.log('Hello')}>
                        Other Foods
                    </Button>
                </View>
                {route.params ?
                    <Button style={styles.save} onPress={() => updateData()}>
                        Update
                    </Button> :
                    <Button style={styles.save} onPress={() => submitData()}>
                        Save
                    </Button>
                }
                <Button style={styles.cancel} onPress={() => {
                    navigation.navigate("Home")
                }}>
                    Cancel
                </Button>
            </View>
        </ScrollView>
    )
}

const theme = {
    colors: {
        primary: "#006aff"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputStyle: {
        margin: 5,
    },
    gender: {
        margin: 20,
        padding: 20,

    },
    buttons: {
        margin: 20,
        padding: 20,
        backgroundColor: "#00ffcc",
    },
    button: {
        margin: 20,
        padding: 20,
        backgroundColor: "#ff6600",
    },
    save: {
        margin: 20,
        padding: 20,
        backgroundColor: "#00ff00",
    },
    cancel: {
        margin: 20,
        padding: 20,
        backgroundColor: "#f0204f",
    },
    details: {
        margin: 5,
        backgroundColor: "#ccff33",
    }
})

export default AddPatient;