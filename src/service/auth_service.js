// import firebase from "firebase";
// import firebaseApp from "./firebase";
import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

class AuthService {
  login(providerName) {
    // const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    // const authProvider = new firebaseAuth[`${providerName}AuthProvider`]();
    const authProvider = this.getProvider(providerName);

    // return firebaseApp.auth().signInWithPopup(authProvider);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`non supported provider ${providerName}`);
    }
  }

  logout() {
    // firebase.auth().signOut();
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    // firebase.auth().onAuthStateChanged((user) => {
    //   onUserChanged(user);
    // });
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
