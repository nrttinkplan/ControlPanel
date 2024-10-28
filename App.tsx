import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';

const AnaSayfa = () => {
  return (
    <LinearGradient
      colors={['rgba(248, 140, 140, 0.61)', '#000000', '#514E4E', 'rgba(0, 0, 0, 0)']}
      locations={[0, 0.9998, 0.9999, 1]}
      style={styles.container}
    >
      <View style={styles.bedroomButtonContainer}>
        <TouchableOpacity>
          <LinearGradient
            colors={['#FDA43C', '#FFFFFF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.buttonBedroom}
          >
            <Text style={styles.buttonBedroomText}>Bedroom</Text>
            <View style={styles.arrowContainer}>
              <Svg width="14" height="7" viewBox="0 0 14 7">
                <Path
                  d="M1 1L7 6L13 1"
                  stroke="#FF0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </Svg>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.pervaneContainer}>
        <Image
          source={require('./assets/pervane.png')}
          style={styles.pervane}
        />
        <Text style={styles.pervaneName}>Black Ceiling Fan</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.icon}>~</Text>
          <Text style={styles.number}>20</Text>
          <Text style={styles.icon}>≈</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.powerButtonContainer}>
        <View style={styles.powerButtonWrapper}>
          <Text style={styles.speedText}>Low</Text>
          <View style={styles.powerButton}>
            <Image
              source={require('./assets/btn.png')}
              style={styles.powerButtonBackground}
            />
            <Image
              source={require('./assets/onOff.png')}
              style={styles.powerButtonIcon}
            />
          </View>
          <Text style={styles.speedText}>High</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bedroomButtonContainer: {
    position: 'absolute',
    top: 46,
    right: 20,
    zIndex: 1,
  },
  buttonBedroom: {
    width: 166,
    height: 57,
    borderRadius: 28.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonBedroomText: {
    color: '#000000',
    fontSize: 16,
    marginRight: 8,
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },
  pervaneContainer: {
    position: 'absolute',
    width: 375,
    height: 195,
    top: 133,
    left: 21,
    alignItems: 'center',
  },
  pervane: {},
  pervaneName: {
    marginTop: 35,
    fontFamily: 'Roboto',
    fontSize: 26,
    lineHeight: 30.47,
    color: '#FDA43C',
    textAlign: 'center',
  },
  button: {
    width: 245,
    height: 77,
    backgroundColor: '#FDA43C17',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 67,
    borderTopRightRadius: 67,
    borderBottomRightRadius: 67,
    opacity: 0.9,
    marginTop: 100,
  },
  icon: {
    fontSize: 44,
    color: '#FFAA33',
    marginHorizontal: 52,
  },
  number: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#FFAA33',
  },
  powerButtonContainer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    width: '100%',
  },
  powerButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  powerButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  powerButtonBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
  },
  powerButtonIcon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  speedText: {
    color: '#FDA43C',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default AnaSayfa;
