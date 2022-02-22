import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

const CreateRoom = () => {
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
            >Buat Room</Text>
            <View
                style={{
                    marginTop: 30
                }}
            >
                <Text style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
                    color: '#000'
                }}>Nama Sekolah/Instansi</Text>
                <TextInput
                    style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        borderWidth: 1,
                        padding: 10,
                        borderColor: '#05c46b',
                        marginTop: 5
                    }}
                    placeholder="Nama Sekolah/Instansi"
                />
            </View>
            <View
                style={{
                    marginTop: 15
                }}
            >
                <Text style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
                    color: '#000'
                }}>Alamat Sekolah/Instansi</Text>
                <TextInput
                    style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        borderWidth: 1,
                        padding: 10,
                        borderColor: '#05c46b',
                        marginTop: 5
                    }}
                    placeholder="Alamat Sekolah/Instansi"
                />
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
                        >Buat Room</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default CreateRoom