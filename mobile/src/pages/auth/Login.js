import React, {
    useState
} from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const eyeSlash = <FontAwesome5 name={'eye-slash'} size={15} color={'black'} />;
const eye = <FontAwesome5 name={'eye'} size={15} color={'black'} />;

const Login = ({navigation}) => {

    const [showPassword, setshowPassword] = useState(false);

    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('Submit')
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
                Login
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
                    onChange={ (username) => setUsername(username) }
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
                        onChange={ (password) => setPassword(password) }
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
            <View
                style={{
                    marginTop: 25
                }}
            >
                <Text
                    style={{
                        color: '#0fbcf9',
                    }}
                >Lupa Password ?</Text>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Registrasi') }
                >
                    <Text
                        style={{
                            color: '#0fbcf9',
                        }}
                    >Belum Punya Akun ?</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
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
                    >Login</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default Login