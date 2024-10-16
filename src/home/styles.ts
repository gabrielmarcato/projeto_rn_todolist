import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 3,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
  },
  forms: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    top: -50,
    position: 'absolute'
  }, 
  input: {
    flex: 3,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 5,
    marginRight: 5,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#F2F2F2',
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  moreInformation: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 20,
  },
  containerCreate:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  containerFinish:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  textTaskCreate: {
    fontSize: 17,
    color: '#4EA8DE',
    fontWeight: 'bold',
    marginRight: 10
  },
  countCreate: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textTaskFinish: {
    fontSize: 17,
    color: '#8284FA',
    fontWeight: 'bold',
    marginRight: 10
  },
  countFinish: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  listTasks: {
    width: '100%',
    height: '83%'
  },
  containerListEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333333',
    padding: 20,
    marginLeft: 20,
    marginRight: 20
  },
  logoListEmpty: {
    height: 56,
    marginTop: 20
  },
  textHeaderListEmpty: {
    fontSize: 14,
    color: '#808080',
    fontWeight: 'bold',
    marginTop: 20
  },
  textListEmpty: {
    fontSize: 14,
    color: '#808080'
  }
});

export default styles