import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
import 'firebase/firestore';
import { firebaseConfig } from '../../settings';

const valid =
  firebaseConfig && firebaseConfig.apiKey && firebaseConfig.projectId;

const firebaseApp = valid && firebase.initializeApp(firebaseConfig);
const firebaseAuth = valid && firebase.auth;

class FirebaseHelper {
  isValid = valid;
  EMAIL = 'email';
  FACEBOOK = 'facebook';
  GOOGLE = 'google';
  GITHUB = 'github';
  TWITTER = 'twitter';

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.database = this.isValid && firebase.firestore();
    this.rsf =
      this.isValid && new ReduxSagaFirebase(firebaseApp, firebase.firestore());
    this.rsfFirestore = this.isValid && this.rsf.firestore;
  }

  createBatch = () => {
    return this.database.batch();
  };

  async signup(provider, info) {
    if (!this.isValid) {
      return;
    }
    try {
      switch (provider) {
        case this.EMAIL:
          return await firebaseAuth().createUserWithEmailAndPassword(
            info.email,
            info.password
          );
        default:
      }
    } catch (error) {
      return error;
    }
  }

  async login(info) {
    if (!this.isValid) {
      return;
    }
    try {
      if (info.remember) {
        await firebaseAuth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      } else {
        await firebaseAuth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      }
      return await firebaseAuth().signInWithEmailAndPassword(
          info.email,
          info.password
      );
    } catch (error) {
      return error;
    }
  }

  logout() {
    return firebaseAuth().signOut();
  }

  isAuthenticated() {
    firebaseAuth().onAuthStateChanged(user => {
      return user ? true : false;
    });
  }
  resetPassword(email) {
    return firebaseAuth().sendPasswordResetEmail(email);
  }
  createNewRef() {
    return firebase
      .database()
      .ref()
      .push().key;
  }
  processFireStoreCollection(snapshot) {
    let data = {};
    snapshot.forEach(doc => {
      data = {
        ...data,
        [doc.id]: doc.data(),
      };
    });
    return data;
  }
}

export default new FirebaseHelper();
