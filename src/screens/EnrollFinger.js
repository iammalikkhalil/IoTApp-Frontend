import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    ActivityIndicator
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import Colors from '../assets/Colors';
import Ip from '../assets/Ip';
import axios from 'axios';
import ShowToast from '../components/ShowToast';
import Toast from 'react-native-toast-message';

export default function EnrollFinger({ navigation }) {
    const [fingerprintId, setFingerprintId] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function PostData() {
        setIsLoading(true);
        if (fingerprintId && username) {
            const apiEndpoint = `${Ip}/fingerprint/postfingerprint`;
            const obj = { username, fingerprintId };
            console.log(obj);
            try {
                const response = await axios.post(apiEndpoint, obj, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                // Handle successful response
                console.log('Response:', response.data);
                setFingerprintId("");
                setUsername("");
                ShowToast({
                    type: 'success',
                    text1: "Finger Enrolled Successfully!",
                });
            } catch (error) {
                console.log(error.response?.data?.message || error.response?.data?.error || error.response || error);
                ShowToast({
                    type: 'error',
                    text1: error.response?.data?.message || error.response?.data?.error || error.response || error,
                });
            } finally {
                setIsLoading(false);
            }
        } else {
            ShowToast({
                type: 'error',
                text1: "At least one field is empty",
            });
            console.log('At least one field is empty');
            setIsLoading(false);
        }
    }

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ paddingBottom: 50 }}
            >
                <Header headerText="Enroll Finger" />
                <Text></Text>
                <Text></Text>
                <ScrollView>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputContainerLabel}>Enter Username</Text>
                        <TextInput
                            style={styles.inputContainerInputFeild}
                            placeholderTextColor="gray"
                            placeholder="john123"
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputContainerLabel}>Enter FingerID</Text>
                        <TextInput
                            style={styles.inputContainerInputFeild}
                            placeholderTextColor="gray"
                            placeholder="between 1-128"
                            value={fingerprintId}
                            onChangeText={setFingerprintId}
                        />
                    </View>

                    <TouchableOpacity style={styles.btnContainer} onPress={PostData}>
                        {isLoading ? (
                            <ActivityIndicator size="large" color={Colors.secondaryBgColor} />
                        ) : (
                            <Text style={styles.btnText}>Submit</Text>
                        )}
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
            <Toast />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryBgColor,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    inputContainerLabel: {
        fontSize: 16,
        width: '40%',
    },
    inputContainerInputFeild: {
        fontSize: 16,
        width: '60%',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        borderColor: Colors.secondaryBgColor,
    },
    btnContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    btnText: {
        backgroundColor: Colors.secondaryBgColor,
        color: Colors.secondaryFontColor,
        fontWeight: 'bold',
        borderRadius: 10,
        fontSize: 20,
        paddingVertical: 10,
        textAlign: 'center',
        width: 100,
    },
});