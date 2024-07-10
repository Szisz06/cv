import "./home.css";
import me from "./me.png";

export default function Home() {
  return (
    <div className="Home">
      <div className="Introduction">
        <h1>Hello there!</h1>
        <p>
          I am Szilvia Mócza and this is my{" "}
          <span className="highlight">portfolio site</span> as a junior frontend
          developer.
          <span className="highlight">
             I ventured into the IT world in 2022 when I started studying at
            Számalk-Szalézi Technical School because I felt I was more than a
            restaurant worker and wanted to do something that always presents
            new challenges and allows me to create, as art is my passion.
          </span>
          I am Szilvia Mócza and this is my portfolio site as a junior frontend
          developer.
          <span className="highlight">
            I successfully graduated in 2023 with an average grade of 4, which
            is considered an outstanding achievement.
          </span>
          After that, I decided to apply to the University of Dunaújváros for
          the engineering informatics program.
          <span className="highlight">
            I completely fell in love with programming, what I do, and what I
            can achieve in this profession.
          </span>
          That's why I want to further develop my skills by earning a degree.
        </p>
        <p>
          <span className="highlight">
            On this website, I showcase my past work, their documentation, and
            photo galleries on the 'My Works' page.
          </span>
          On the "About Me" page, I give an insight into my daily life, who I
          am, and my future aspirations.
          <span className="highlight">
            Feel free to contact me if you think I could be a valuable member of
            your team or if you would like to work with me.
          </span>
          <span className="highlight">
            Below, I list the main programming languages I have worked with over
            the past two years.
          </span>
        </p>
        <div className="Skills">
          <ul></ul>
        </div>
      </div>

      <div className="Image">
        <img src={me} className="App-logo" alt="logo" />
      </div>
      <footer>
        <p>
          This application was made with React in the Visual Studio Code
          development environment and is 100% owned by Szilvia Mócza.
        </p>
      </footer>
    </div>
  );
}

/*
Mócza Szilvia vagyok és ez az én bemutatkozó oldalam junior frontend fejlesztőként. 
2022-ben csöppentem az IT világába, amikor elkezdtem a Számalk-Szalézi Technikum és Szakgimnáziumban tanulni, 
mert úgy éreztem, hogy több vagyok egy éttermi dolgozónál, és valami olyat szeretnék csinálni, ami mindig új 
kihívások elé állít és lehetőséget ad az alkotásra, mivel szenvedélyem a művészet. 2023-ban sikeresen végeztem el 
az iskolát 4-es átlaggal, ami kiemelkedő eredménynek számít. Ezt követően döntöttem úgy, hogy jelentkezem a 
Dunaújvárosi Egyetem mérnökinformatikus szakára. Bár kezdetben úgy tűnt, hogy ez nem az én világom, teljesen 
beleszerettem a programozásba, abba, amit csinálok, és abba, amit ezen a szakmán belül elérhetek. Ezért szeretném 
még hatékonyabban továbbfejleszteni a tudásomat egy diploma megszerzésével.

Ezen a weboldalon bemutatom az eddigi munkáimat, azok dokumentációját, valamint képgalériákat a "Munkáim" oldalon. 
A "Rólam" oldalon pedig betekintést adok a hétköznapjaimba, az életembe, és hogy milyen ember vagyok, mik az elképzeléseim 
a jövőmet illetően. Bátran lépjen velem kapcsolatba, ha úgy gondolja, hogy hasznos tagja lehetnék a csapatának, vagy ha szívesen 
dolgozna velem együtt. Lentebb felsorolom a főbb programozási nyelveket, amelyekkel az elmúlt 2 évben dolgoztam.
*/
