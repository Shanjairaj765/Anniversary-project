import "./LoveLetter.css";

function LoveLetter() {
  return (
    <div className="love-letter-page">

      {/* Floating hearts */}
      <div className="letter-particles">
        <span>♥</span>
        <span>♡</span>
        <span>✦</span>
        <span>♥</span>
        <span>♡</span>
        <span>✦</span>
        <span>♥</span>
        <span>♡</span>
        <span>✦</span>
        <span>♥</span>
      </div>

      {/* Top navigation */}
      <div className="letter-nav">
        <button
          onClick={() => window.history.back()}
          className="back-button"
        >
          ← Back to our story
        </button>
      </div>

      {/* Main letter */}
      <main className="letter-wrapper">

        <div className="letter-label">
          ✦ A LETTER FROM MY HEART ✦
        </div>

        <div className="letter-envelope">
          <div className="letter-paper">

            <div className="letter-decoration top-left">
              ✦
            </div>

            <div className="letter-decoration top-right">
              ♥
            </div>

            <div className="letter-header">

              <p className="letter-date">
                OCTOBER 2, 2026
              </p>

              <h1>
                My Dear <span>Bharyaa,</span>
              </h1>

              <div className="little-heart">
                ♥
              </div>

            </div>

            <div className="letter-body">

              <p>
                Hey kunjii, cute kunjii... enaku rombaaa happy haa
                irruku. Like literally <strong>1 yr!</strong>
              </p>

              <p className="excited">
                Yeppie yeppie yeppie yeppie yeppie yeppie yeppie
                yeppie yeppie yeppie yeppie yeppie yeppie! 🥹💜
              </p>

              <p>
                Rombaaaa perumaya irruku dii Dhanishka.
                Like indha robot kooda nee epdi ivalo naaal irundha
                nu therlaaaa sathimaaa. 😭
              </p>

              <p>
                Iam sorry, glad... and Dhanishka,
                en life laa enaku nee nariyaaa happiness
                kuduthurukaaa.
              </p>

              <p>
                Literally naaa un kooda iruka modhu dha
                naa rombaaa sandhosama irundhen.
                Naa nanave irundhena apo dha...
                en life oru maari pee dha Dhanishka.
              </p>

              <p className="highlight-text">
                Aana nee epo en life laa vandhiyo,
                apove maariduchu ellame.
                Literally ellame mariduchu. ❤️
              </p>

              <p>
                Avalo happy aana memories unkoodaa irruka modhu...
                indha 1 yr la nammakula nariyaaaa sandaigal,
                depressions, hurtful aapdinu nariyaaa
                and nariyaaaa vishayangal nammakulaa
                nariyaaaa mathikitom dii.
              </p>

              <p>
                Sollapona literally enaku rombaaa sandhosama
                irruku dii kunjii.
              </p>

              <p className="love-line">
                I LOVEEEEEEEE YOUUUUUUUUUUUUU
                <br />
                DAMNNNNNN SOOOOOOOOOOOOOOOOO MUCHHHHHHHHHHHHHHHH 🫀
              </p>

              <p>
                Like first ever... literally u know,
                andha starting stage marakave maaten.
                Aapdi bayama literally oru butterfly stage.
              </p>

              <p className="funny-line">
                Literally ahhhhhhh mommmmmmyyyy
                ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 😭
              </p>

              <p>
                Cutie pie aaama...
                but ipo namma nalla palagitom and
                comfortable aavum aagitom.
              </p>

              <p>
                Aaaaama cuteee kunjii diwali apo dha
                ommala naaa literally aaludhuten dii 😭😭😭😭😭
              </p>

              <p>
                Likee naa china vayasula irrundhu pray panitu
                vaaren.
                Adhuku palana nee enaku kadaichirukaaa.
              </p>

              <p className="promise">
                Naaa una nalla pathupen dii.
                <br />
                <span>I PROMISE YOUUUUUU. 🤍</span>
              </p>

              <p>
                Enaku ore oru aaasa dha...
                ena nalla pathukongaaa badhrama.
              </p>

              <p>
                Enaku unaa rombaaaa pudikum.
                Un eyes irruku laa...
                adhula mayangina payan dha naa literally.
              </p>

              <p>
                I am soo attracted to you physically,
                mentally and emotionally nigaaaa. 🫶
              </p>

              <p className="playful">
                If u ever ditch me...
                unaku sabam vitruven.
                Pathuko ommala 😤😤😤😤😤😤
              </p>

              <p className="final-love">
                Loveeeeeeeee youuuuuuuuuuuuu
                <br />
                sooooooooooooooooooooooo muchhhhhhhhhhhh
                <br />
                mommy ummmmmmaaa 💋
              </p>

            </div>

            {/* Signature */}
            <div className="letter-signature">

              <p>
                Happiest First Year Anniversary
              </p>

              <div className="signature-hearts">
                💋💋💋❤️❤️
              </div>

              <div className="signature-line"></div>

              <span>
                Forever yours,
              </span>

              <strong>
                Shanjai ♡
              </strong>

            </div>

            <div className="letter-decoration bottom-left">
              ♥
            </div>

            <div className="letter-decoration bottom-right">
              ✦
            </div>

          </div>
        </div>

        {/* Ending */}
        <div className="letter-ending">

          <div className="ending-heart">
            ♥
          </div>

          <p>
            October 2, 2025
          </p>

          <h2>
            The day it all began.
          </h2>

          <span>
            And here's to every October yet to come. 💜
          </span>

        </div>

      </main>

    </div>
  );
}

export default LoveLetter;