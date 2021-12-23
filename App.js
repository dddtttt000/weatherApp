import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import * as Location from 'expo-location'

// 스크린의 width 를 가져와서 해당 크기만큼 보여준다.
const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function App() {
  const [city, setCity] = useState('Loading...')
  const [location, setLocation] = useState(null)
  const [ok, setOk] = useState(true)

  const ask = async () => {
    // grant 를 받아온다.
    const { granted } = await Location.requestForegroundPermissionsAsync()

    if (!granted) {
      setOk(false)
    }

    // 현재 위치를 latitude 위도, longitude 경도를 받아온다.
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 })
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false },
    )
    setCity(location[0].city)
  }

  useEffect(() => {
    ask()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
      </ScrollView>
      {/* 상태바를 밝은 색으로 지정 */}
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
  },
  city: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityName: {
    fontSize: 68,
    fontWeight: '500',
    color: 'white',
  },
  weather: {
    // backgroundColor : "teal"
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    color: '#fff9',
    marginTop: 50,
    fontSize: 178,
  },
  desc: {
    color: '#fff9',
    marginTop: -30,
    fontSize: 60,
  },
})
