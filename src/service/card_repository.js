// import firebaseApp from "./firebase";
import {firebaseDatabase} from './firebase'

class CardRepository {
  syncCards(userId, onUpdate) {
    // const ref = firebaseApp.database().ref(`${userId}/cards`);
    const ref = firebaseDatabase.ref(`${userId}/cards`);

    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveCard(userId, card) {
    console.log(`card_repository : ${userId}`);
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    console.log(`card_repository : ${userId}`);
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
