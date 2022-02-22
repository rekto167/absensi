import React,{
    useState
} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const Room = () =>{
    return(
        <View
            style={{
                padding: 20
            }}
        >
            <Text
                style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 25,
                    color: '#000'
                }}
            >Room</Text>
            <View
                style={{
                    marginTop: 30
                }}
            >
                <Text style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
                    color: '#000'
                }}>Kode Room</Text>
                <TextInput
                    style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        borderWidth: 1,
                        padding: 10,
                        borderColor: '#05c46b',
                        marginTop: 5
                    }}
                    placeholder="Kode Room"
                />
                <View
                    style={{
                        marginTop: 15
                    }}
                >
                    <Text
                        style={{
                            color: '#0fbcf9'
                        }}
                    >Belum punya room ?</Text>
                </View>
                <View
                    style={{
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#0be881',
                            width: 150,
                            padding: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Regular',
                                color: '#fff',
                                fontWeight: '500',
                                fontSize: 14
                            }}
                        >Gabung Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Room;