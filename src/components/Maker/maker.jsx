import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "../Editor/editor";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Preview from "../Preview/preview";
import styles from "./maker.module.css";

export default function Maker({ FileInput, authService, cardRepository }) {
  const location = useLocation();
  const navigateState = location.state;
  console.log(`maker navigateState${navigateState.id}`);
  // const
  const [userId, setUserId] = useState();
  const navigate = useNavigate();
  const [cards, setCards] = useState({});

  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => {
      stopSync();
    };
  }, [userId]);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(navigateState.id);
      } else {
        navigate("/");
      }
    });
  });

  const addCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    console.log(`maker Id : ${userId}`);
    cardRepository.saveCard(userId, card);
  };

  const updateCard = (card) => {
    // 무언가 업데이트 할때, 이전 상태를 변경하고 업뎃하면
    // 업데이트 하는 시점의 ...cards가 오래된 것일 수도
    // 동기적으로 해결이 불가능 할 수도..
    // const updated = { ...cards };
    // updated[card.id] = card;
    // setCards(updated);

    // 콜백으로 이용할 수 있다
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={addCard}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}
