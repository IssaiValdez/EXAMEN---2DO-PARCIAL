import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function CryptoWelcome() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.brand}>
          Crypto<Text style={styles.brandAccent}>X</Text>
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Get Started</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#050505',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 44,
    fontWeight: '800',
    letterSpacing: -2,
    lineHeight: 52,
  },
  brandAccent: {
    color: '#684DFF',
  },
  artwork: {
    width: '100%',
    maxWidth: 320,
    height: 270,
    alignSelf: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  petal: {
    position: 'absolute',
    borderRadius: 999,
    shadowColor: '#755CFF',
    shadowOpacity: 0.45,
    shadowRadius: 14,
    elevation: 8,
  },
  petalBack: {
    width: '66%',
    height: '78%',
    top: '10%',
    left: '22%',
    backgroundColor: '#A9A4FF',
    transform: [{ rotate: '24deg' }],
  },
  petalTop: {
    width: '54%',
    height: '74%',
    top: '3%',
    left: '31%',
    backgroundColor: '#C3C0FF',
    transform: [{ rotate: '-28deg' }],
  },
  petalLeft: {
    width: '60%',
    height: '55%',
    top: '22%',
    left: '7%',
    backgroundColor: '#8471FF',
    transform: [{ rotate: '34deg' }],
  },
  petalRight: {
    width: '54%',
    height: '60%',
    top: '25%',
    left: '41%',
    backgroundColor: '#9084FF',
    transform: [{ rotate: '-42deg' }],
  },
  petalFront: {
    width: '57%',
    height: '44%',
    top: '48%',
    left: '18%',
    backgroundColor: '#6548ED',
    transform: [{ rotate: '-24deg' }],
  },
  petalCenter: {
    width: '25%',
    height: '25%',
    top: '44%',
    left: '41%',
    backgroundColor: '#B7B1FF',
    transform: [{ rotate: '20deg' }],
  },
  highlight: {
    width: 18,
    height: 18,
    top: '52%',
    left: '58%',
    borderRadius: 999,
    backgroundColor: '#D3CEFF',
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.8,
    shadowRadius: 12,
  },
  copy: {
    gap: 18,
    marginTop: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: -0.7,
    lineHeight: 34,
  },
  description: {
    color: '#F1F1F1',
    fontSize: 12,
    lineHeight: 18,
  },
  button: {
    height: 50,
    marginTop: 'auto',
    marginBottom: 4,
    borderRadius: 14,
    backgroundColor: '#634DFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#634DFF',
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
