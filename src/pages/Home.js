import "./home.css";
import me from "./me.png";
import React from "react";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="main-content">
        <div className="Home">
          <div className="Introduction">
            <h1>Üdv!</h1>
            <p>
              Mócza Szilvia vagyok és ez a
              <span className="highlight"> portfólió oldalam </span> junior
              frontend fejlesztőként.
            </p>
            <p>
              2022-ben csöppentem az IT világába, amikor elkezdtem a
              Számalk-Szalézi Technikum és Szakgimnáziumban tanulni, mert
              <span className="highlight">
                {" "}
                úgy éreztem, hogy többre vagyok képes
              </span>
              , és valami olyat szeretnék csinálni, ami mindig új kihívások elé
              állít és lehetőséget ad az alkotásra, mivel szenvedélyem a
              művészet.
              <span className="highlight">
                {" "}
                2024-ben sikeresen elvégeztem az iskolát{" "}
              </span>
              4-es átlaggal, ami kiemelkedő eredménynek számít.
            </p>
            <p>
              Ezt követően döntöttem úgy, hogy jelentkezem a Dunaújvárosi
              Egyetem mérnökinformatikus szakára.
              <span className="highlight">
                {" "}
                Teljesen beleszerettem a programozásba, abba, amit csinálok, és
                abba, amit ezen a szakmán belül elérhetek.{" "}
              </span>
              Ezért szeretném tovább fejleszteni a tudásomat egy diploma
              megszerzésével.
            </p>
            <p>
              Ezen a weboldalon bemutatom az eddigi munkáimat, azok
              dokumentációját, valamint képgalériákat a{" "}
              <a href="/my-works" className="highlight">
                Munkáim
              </a>{" "}
              oldalon. A{" "}
              <a href="/about-me" className="highlight">
                Rólam
              </a>{" "}
              oldalon betekintést adok a hétköznapjaimba, hogy ki vagyok és mik
              a jövőbeni terveim. Az elérhetőségeimet{" "}
              <a href="/contact" className="highlight">
                ITT
              </a>{" "}
              találja, ha úgy gondolja, hogy hasznos tagja lehetnék a
              csapatának, vagy ha szívesen dolgozna velem együtt.
            </p>
            <p>
              <span className="highlight">
                {" "}
                Lentebb felsorolom a főbb programozási nyelveket, amelyekkel az
                elmúlt két évben dolgoztam.
              </span>
            </p>

            <div className="Skills">
              <ul>
                <li> HTML</li>
                <li> CSS</li>
                <li> JavaScript</li>
                <li> jQuery</li>
                <li> React</li>
                <li> SQL</li>
                <li> Laravel</li>
                <li> Python</li>
                <li> Java</li>
              </ul>
            </div>
          </div>
          <div className="Image">
            <img src={me} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

/*
            <h1>Hello there!</h1>
            <p>
              I am Szilvia Mócza and this is my{" "}
              <span className="highlight">portfolio site</span> as a junior
              frontend developer.
            </p>
            <p>
              I ventured into the IT world in 2022, when I started studying at
              Számalk-Szalézi Technical School, because{" "}
              <span className="highlight">
                I felt I was more than a restaurant worker
              </span>{" "}
              and wanted to do something that always presents new challenges and
              allows me to create, as art is my passion.
              <span className="highlight">
                {" "}
                I successfully graduated in 2024 with an average grade of 4,
                which is considered an outstanding achievement.
              </span>
            </p>
            <p>
              After that, I decided to apply to the University of Dunaújváros
              for the engineering informatics program.{" "}
              <span className="highlight">
                I completely fell in love with programming, what I do, and what
                I can achieve in this profession.
              </span>{" "}
              That's why I want to further develop my skills by earning a
              degree.
            </p>
            <p>
              On this website, I showcase my past work, their documentation, and
              photo galleries on the "My Works" page.{" "}
              <span className="highlight">
                On the "About Me" page, I give an insight into my daily life
              </span>
              , who I am, and my future aspirations.
              <span className="highlight">
                {" "}
                Feel free to contact me if you think I could be a valuable
                member of your team or if you would like to work with me.
              </span>
            </p>
            <p>
              <span className="highlight">
                Below, I list the main programming languages
              </span>{" "}
              I have worked with over the past two years.
            </p>
*/
