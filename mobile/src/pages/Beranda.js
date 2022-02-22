import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'


const Beranda = () => {
  return (
    <View
      style={{
        padding:20,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 20,
            color: '#000'
          }}
        >Absensi Kehadiran Anda</Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#2980b9',
              padding: 10,
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 25
            }}
          >
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                color: '#fff'
              }}
            >
              Hadir
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 25,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>
            <FontAwesomeIcon icon={ faMapLocationDot } size={25} style={{color: '#95a5a6'}} />
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              marginTop: 15
            }}
          >Koto Kari</Text>
        </View>
    </View>
  )
}

export default Beranda
