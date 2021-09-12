import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, Alert } from 'react-native';
import { Title, Card, Button } from 'react-native-paper';
import { ngrok } from '../ngrok'

const Report = (props) => {

    const { _id, name, phone, email, address, age, gender } = props.route.params.item
    const deletePatient = () => {
        fetch("https://4702-122-179-62-45.ngrok.io/delete", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id
            })
        })
            .then(res => res.json())
            .then(deletePat => {
                Alert.alert(`${deletePat.name} deleted`)
                props.navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }
    const openDial = () => {
        if (Platform.OS === "android") {
            Linking.openURL(`tel:${phone}`)
        }
        else {
            Linking.openURL(`telprompt:${phone}`)
        }

    }
    return (
        <ScrollView>
            <View style={{ alignItems: "center" }}>
                <Title >
                    Report
                </Title>
            </View>
            <View>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Name: {name}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard} onPress={() => openDial()}>
                    <View style={styles.cardContent}>
                        <Text>
                            Phone: {phone}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard} onPress={() => { Linking.openURL(`mailto:${email}`) }}>
                    <View style={styles.cardContent}>
                        <Text>
                            Email: {email}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Address: {address}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Age: {age}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Age: {gender}
                        </Text>
                    </View>
                </Card>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Button style={{ backgroundColor: "orange", margin: 10 }} onPress={() => console.log('Hello')}>
                    PDF
                </Button>
                <Button style={{ backgroundColor: "cyan", margin: 10 }} onPress={() => {
                    props.navigation.navigate("AddPatient", { _id, name, phone, email, address, age, gender })
                }}>
                    Edit
                </Button>
                <Button style={{ backgroundColor: "yellow", margin: 10 }} onPress={() => console.log('Hello')}>
                    Email
                </Button>
            </View>
            <View>
                <Button style={{ backgroundColor: "red", margin: 10 }} onPress={() => deletePatient()}>
                    Delete
                </Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 3,
    },
    cardContent: {
        flexDirection: "row",
        padding: 10
    }
})

export default Report;