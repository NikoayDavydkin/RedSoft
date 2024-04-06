import styles from "./MainPages.module.scss";
import React from "react";
import Header from "../../components/Header/Header";


const MainPages = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.contentTop}>
          Наша миссия – создание условий для повышения качества жизни граждан
          Российской Федерации путем реализации инновационного потенциала
          личности, трудового коллектива и общества в сферах:
        </div>
        <ul className={styles.contentBot}>
          <li>
            <span>
              Импортозамещение информационных технологий государственной
              информатизации
            </span>
          </li>
          <li>
            <span>
              Совершенствование системы государственного управления средствами
              информационных технологий
            </span>
          </li>
          <li>
            <span>
              Развитие отрасли информационных технологий, включая экспорт
              программных продуктов, работ и&nbsp;услуг за&nbsp;рубеж
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPages;
