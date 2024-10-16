import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
},
  containerCheckBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBox: {
    borderRadius: 10,
    borderColor: '#4EA8DE' 
  },
  containerDescription: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'underline'
  },
  descriptionText: {
    color: '#F2F2F2',
    fontSize: 14,

  }, 
  descriptionTextThrough: {
    color: '#808080',
    fontSize: 14,
    textDecorationLine: 'line-through'
  },
  containerButtonRemove: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles