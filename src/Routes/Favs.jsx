import React, { useState, useContext } from "react";
import Card from "../Components/Card";
import style from "../Styles/favs.module.css";
import { AppContext } from "../Components/utils/AppContext";
import styles2 from "../Styles/app.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useContext(AppContext);
  const [, setfavsState] = useState([]);
  const localData = JSON.parse(localStorage.getItem("favs"));

  function handleDelete(id) {
    const newLocalData = localData.filter((d) => d.id !== id);
    localStorage.setItem("favs", JSON.stringify(newLocalData));
    setfavsState(newLocalData);
  }
  return (
    <main className={`${styles2[theme]}`}>
      <div className={styles2.titleContainer}>
        <p className={styles2.title}>Dentists Favs</p>
        <section className={style.container}>
          {localData && localData.length ? (
            localData.map((d) => (
              <div key={d.id} className={style.cardContainer}>
                <button
                  onClick={() => handleDelete(d.id)}
                  className={style.delete}>
                    X
                </button>
                <Card id={d.id} name={d.name} username={d.username} isDisable={true}></Card>
              </div>
            ))
          ) : (
            <p>You still do not have favorite dentists</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Favs;
