import React, { useState } from "react";
import big1 from "./images/big1.png";
function App() {
  return (
    <div style={styles.container}>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div style={styles.leftContainer}>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={styles.bigText}>Deco</p>
            <p style={styles.bigText2}>Garant</p>
          </div>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <p style={styles.text4}>
              Сделайте свой <br />
              дом необычным{" "}
            </p>
            <p style={styles.text5}>
              Декоративная отделка стен и <br />
              потолков. Все виды <br />
              декоративной штукатурки
            </p>
            <button
              onClick={() => alert("нажатие кнопки")}
              style={styles.button}
            >
              <p style={{ color: "#FFF", fontSize: 16, textAlign: "center" }}>
                Заказать консультацию
              </p>
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#1347FF",
            width: "50%",
            height: 600,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <p style={styles.text6}>Главная</p>
          <p style={styles.text6}>Каталог</p>
          <p style={styles.text6}>Портфолио</p>
          <p style={styles.text6}>Контакты</p>
          <p style={styles.text6}>+380 (95) 108-11-70</p>
        </div>
      </div>
    </div>
  );
}
//<p style={styles.text2}> Главная</p>
const styles = {
  container: {
    width: 1400,
    height: 5000,
    backgroundColor: "#DCDCDC",
    display: "flex",
    flexDirection: "column",
  },
  leftContainer: {
    display: "flex",
    width: "50%",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  bigText: {
    fontSize: 25,
    color: "#0000FF",
    textAlign: "center",
    width: "100%",
  },
  bigText2: {
    fontSize: 25,
    color: "#000",
  },
  text1: {
    fontSize: 30,
    color: "#000",
  },

  text4: { fontSize: 35, color: "#000" },
  text5: { fontSize: 20, color: "#000" },
  button: {
    backgroundColor: "#1347FF",
    width: 236,
    height: 50,

    justifyContent: "center",
    borderWidth: 0,
    display: "flex",
  },
  text6: {
    fontSize: 15,
    color: "#000",
  },
};

export default App;
