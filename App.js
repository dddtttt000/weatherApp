import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

// 스크린의 width 를 가져와서 해당 크기만큼 보여준다.
const {  width: SCREEN_WIDTH } = Dimensions.get("window")


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView 
        horizontal 
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
  },
  city : {
    flex : 1.2, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityName : {
    fontSize : 68,
    fontWeight : "500",
    color: 'white'
  },
  weather : {
    // backgroundColor : "teal"
  },
  day: {
    width : SCREEN_WIDTH,
    alignItems : "center",
  },
  temp : {
    color : "#fff9",
    marginTop : 50,
    fontSize : 178,
  },
  desc : {
    color : "#fff9",
    marginTop : -30,
    fontSize : 60,
  }
});
