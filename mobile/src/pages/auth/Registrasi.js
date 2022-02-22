import React, {
    useState
} from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const eyeSlash = <FontAwesome5 name={'eye-slash'} size={15} color={'black'} />;
const eye = <FontAwesome5 name={'eye'} size={15} color={'black'} />;

const Registrasi = ({navigation}) => {

    const [showPassword, setshowPassword] = useState(true);

    // const [showPassword2, setshowPassword2] = useState(false);

    const [nama, setNama] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [password2, setPassword2] = useState('')

    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    }

    // const handleShowPassword2 = () => {
    //     setshowPassword2(!showPassword2);

    // }

    const submit = () => {
        const data = {
            nama,
            username,
            password
        }

        axios.post('http://10.0.2.2:5000/api/users', data)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return(
        <View style={{padding: 20}}>
            <Text
                style={{
                    fontSize:25,
                    fontFamily: 'Poppins-Bold',
                    color: '#000',
                }}
            >
                Registrasi
            </Text>
            <View
                style={{
                    marginTop: 30
                }}
            >
                <Text style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
                    color: '#000'
                }}>Nama Lengkap</Text>
                <TextInput
                    style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        borderWidth: 1,
                        padding: 10,
                        borderColor: '#05c46b',
                        marginTop: 5
                    }}
                    placeholder="Nama lengkap"
                    value={nama}
                    onChangeText={ newNama => setNama(newNama) }
                />
                <Text style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
                    color: '#000',
                    marginTop: 5,
                }}>Username</Text>
                <TextInput
                    style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        borderWidth: 1,
                        padding: 10,
                        borderColor: '#05c46b',
                        marginTop: 5
                    }}
                    placeholder="Username"
                    value={username}
                    onChangeText={ newusername => setUsername(newusername) }
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
                }}>Password</Text>
                <View
                    style={{
                        positioin: 'relative'
                    }}
                >
                    <TextInput
                        style={{
                            fontSize: 14,
                            fontFamily: 'Poppins-Regular',
                            borderWidth: 1,
                            padding: 10,
                            borderColor: '#05c46b',
                            marginTop: 5
                        }}
                        placeholder="Password"
                        secureTextEntry={showPassword}
                        value={password}
                        onChangeText={ newpassword => setPassword(newpassword) }
                    />
                    <TouchableOpacity
                        onPress={handleShowPassword}
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 20
                        }}
                    >
                        <Text>
                            {showPassword ? eye : eyeSlash}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    marginTop: 25
                }}
                onPress={ () => navigation.navigate('Login') }
            >
                <Text
                    style={{
                        color: '#0fbcf9',
                    }}
                >Sudah Punya Akun ?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={submit}
            >
                <View
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
                    >Registrasi</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default Registrasi