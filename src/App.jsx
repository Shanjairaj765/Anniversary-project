import { useEffect, useState } from "react";
import "./App.css";

const proposalPhotos = [
  "/images/oct2-02.jpg",
  "/images/oct2-03.jpg",
  "/images/oct2-04.jpg",
  "/images/oct2-05.jpg",
  "/images/oct2-06.jpg",
  "/images/oct2-07.jpg",
];

const couplePhotos = [
  "/images/memory1.jpg",
  "/images/memory2.jpg",
  "/images/memory3.jpg",
  "/images/memory4.jpg",
  "/images/memory5.jpg",
  "/images/memory6.jpg",
  "/images/memory7.jpg",
  "/images/memory8.jpg",
  "/images/memory9.jpg",
  "/images/memory10.jpg",
];

const moments = [
  {
    id: "bsr",
    number: "01",
    emoji: "🏬",
    title: "BSR Mall",
    subtitle: "Our First Date",
    theme: "green",
    content: [
      "Aaama kunjii... namma first date literally semaaa exciting haa irunchu 😭❤️",
      "Konjam bayama vum irrunchu... but neenga en kooda irukingaaa nu nenachadhum adhu dha enaku courage ha koduthuchu.",
      "Andha auto journey, highways la nadandhadhu... everything still feels so special to me.",
      "Our first date will always have a very special place in my heart. 🥹❤️",
    ],
  },
  {
    id: "christmas",
    number: "02",
    emoji: "🎄",
    title: "Christmas",
    subtitle: "An Unforgettable Christmas",
    theme: "red",
    content: [
      "Ummmmmm... ahhhhhhh 😭❤️",
      "Christmas is honestly one of the most unforgettable moments in my life.",
      "That day had so many emotions packed into it... excitement, nervousness, happiness and so many butterflies.",
      "Some moments become memories that you simply never want to forget. This is definitely one of them. ❤️",
    ],
  },
  {
    id: "shyyy",
    number: "03",
    emoji: "🙈",
    title: "Shyyyy",
    subtitle: "That Little Shy Moment",
    theme: "cream",
    content: [
      "Ena first time kati pudichingaaa... literally thookitan payan 😭🙈",
      "Sema shy moment... I still remember how nervous and happy I felt at the same time.",
      "And that first kiss moment... adha marakave mudiyadhu. 💋🥹",
      "One tiny moment, but somehow it became one of my favourite memories with you. ❤️",
    ],
  },
  {
    id: "valentine",
    number: "04",
    emoji: "🌹",
    title: "Valentine's",
    subtitle: "My Valentine",
    theme: "wine",
    content: [
      "Ahhhhhhhhhhhhhhhhhhhhhhh ❤️🌹",
      "Our first Valentine's Day together will always be special to me.",
      "The closeness, the teasing, the happiness and the love... everything made that day unforgettable.",
      "No matter how many Valentine's Days come after this, I'll always remember our first one. ❤️",
    ],
  },
  {
    id: "diwali",
    number: "05",
    emoji: "🪔",
    title: "Diwali",
    subtitle: "A Memory I'll Never Forget",
    theme: "gold",
    content: [
      "Diwaliii... 🪔❤️",
      "First thing naa Diwali apo unga idupa sight adichen mommmyyyy 😭😂❤️",
      "Nalla purple saree onu potutu irundhingaa... honestly, you looked absolutely beautiful.",
      "And your eyes... damnnnn. I'm seriously so attracted to them. 🥹",
      "Diwali became even more special because I got to spend those moments with you.",
    ],
  },
];

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedMoment, setSelectedMoment] = useState(null);
  const [showLetter, setShowLetter] = useState(false);
  const [foreverAnswer, setForeverAnswer] = useState(false);

  /*
    IMPORTANT:
    selectedMoment is NOT included here.
    Therefore memory pages remain scrollable.
  */
  useEffect(() => {
    const lockScroll =
      showWelcome ||
      selectedPhoto !== null ||
      showLetter ||
      foreverAnswer;

    document.body.style.overflow = lockScroll ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [
    showWelcome,
    selectedPhoto,
    showLetter,
    foreverAnswer,
  ]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openMoment = (moment) => {
    setSelectedMoment(moment);
    window.scrollTo(0, 0);
  };

  const closeMoment = () => {
    setSelectedMoment(null);
    window.scrollTo(0, 0);
  };

  const nextMoment = () => {
    if (!selectedMoment) return;

    const currentIndex = moments.findIndex(
      (item) => item.id === selectedMoment.id
    );

    const nextIndex =
      (currentIndex + 1) % moments.length;

    setSelectedMoment(moments[nextIndex]);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* FIXED ALAIPAYUTHEY BACKGROUND */}
      <div className="cinema-background">
        <div className="cinema-background-image"></div>
        <div className="cinema-background-vignette"></div>
      </div>

      {/* =========================
          WELCOME
      ========================== */}
      {showWelcome && (
        <div className="welcome-screen">
          <div className="welcome-overlay"></div>

          <div className="welcome-content">
            <div className="welcome-small">
              A LITTLE LOVE STORY
            </div>

            <div className="welcome-symbol">
              ♡
            </div>

            <h1>
              My
              <br />
              <span>Kunjii</span>
            </h1>

            <p>
              One year.
              <br />
              Countless memories.
              <br />
              One person I choose.
            </p>

            <button
              onClick={() => setShowWelcome(false)}
            >
              Enter Our Story <span>♡</span>
            </button>
          </div>
        </div>
      )}

      {/* =========================
          MEMORY CHAPTER
      ========================== */}
      {selectedMoment && (
        <div
          className={`memory-page memory-${selectedMoment.theme}`}
        >
          <div className="memory-overlay"></div>

          <div className="memory-page-inner">
            <button
              className="memory-back"
              onClick={closeMoment}
            >
              ← Our Story
            </button>

            <div className="memory-chapter">
              <div className="memory-number">
                CHAPTER {selectedMoment.number}
              </div>

              <div className="memory-emoji">
                {selectedMoment.emoji}
              </div>

              <h1>
                {selectedMoment.title}
              </h1>

              <p className="memory-subtitle">
                {selectedMoment.subtitle}
              </p>

              <div className="memory-rule"></div>

              <div className="memory-content">
                {selectedMoment.content.map(
                  (paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  )
                )}
              </div>

              <div className="memory-heart">
                ♡
              </div>

              <div className="memory-navigation">
                <button onClick={closeMoment}>
                  ← Back
                </button>

                <button
                  className="next-memory"
                  onClick={nextMoment}
                >
                  Next Memory →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================
          MAIN WEBSITE
      ========================== */}
      {!showWelcome && !selectedMoment && (
        <div className="website">

          {/* NAVBAR */}
          <nav className="navbar">
            <div
              className="nav-logo"
              onClick={() => scrollTo("home")}
            >
              S <span>♡</span> D
            </div>

            <div className="nav-links">
              <button onClick={() => scrollTo("home")}>
                Home
              </button>

              <button
                onClick={() => scrollTo("proposal")}
              >
                Beginning
              </button>

              <button
                onClick={() => scrollTo("memories")}
              >
                Memories
              </button>

              <button
                onClick={() => scrollTo("love")}
              >
                Us
              </button>
            </div>
          </nav>

          {/* =========================
              HERO
          ========================== */}
          <section className="hero" id="home">
            <div className="section-glass hero-glass">
              <p className="eyebrow">
                OUR LITTLE LOVE STORY
              </p>

              <div className="hero-heart">
                ♡
              </div>

              <h1>
                Happiest
                <br />
                <span>First Anniversary</span>
              </h1>

              <div className="hero-names">
                Shanjai
                <span> ♡ </span>
                Dhanishka
              </div>

              <p className="hero-date">
                02.10.2025 — FOREVER
              </p>

              <div className="hero-scroll">
                <span>Scroll to our story</span>
                <b>↓</b>
              </div>
            </div>
          </section>

          {/* =========================
              PROPOSAL
          ========================== */}
          <section
            className="content-section proposal-section"
            id="proposal"
          >
            <div className="glass-card proposal-card">
              <p className="eyebrow">
                OCTOBER 2, 2025
              </p>

              <div className="small-heart">
                ♡
              </div>

              <h2>
                The Day
                <br />
                <span>Everything Started</span>
              </h2>

              <div className="proposal-rule"></div>

              <p className="proposal-quote">
                “Fall from a mountain,
                there's rope.
                <br />
                Fall into a river,
                there's boat.
                <br />
                But fall in love,
                there's no hope!”
              </p>

              <p className="proposal-normal">
                That's how the famous proposal day
                quote goes...
              </p>

              <p className="proposal-final">
                But will you bring hope to my life
                by falling in love together...? ❤️
              </p>
            </div>
          </section>

          {/* =========================
              OCTOBER PHOTOS
          ========================== */}
          <section className="content-section photos-section">
            <div className="section-title">
              <p className="eyebrow">
                THAT DAY
              </p>

              <h2>
                The Beginning
                <br />
                <span>Of Us</span>
              </h2>

              <p>
                The first pages of our story.
              </p>
            </div>

            <div className="proposal-photo-grid">
              {proposalPhotos.map(
                (photo, index) => (
                  <div
                    className="photo-frame"
                    key={photo}
                    onClick={() =>
                      setSelectedPhoto(photo)
                    }
                  >
                    <img
                      src={photo}
                      alt={`Proposal memory ${
                        index + 1
                      }`}
                    />

                    <div className="photo-number">
                      0{index + 1}
                    </div>

                    <div className="photo-hover">
                      ♡
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          {/* =========================
              COUPLE GALLERY
          ========================== */}
          <section className="content-section gallery-section">
            <div className="section-title">
              <p className="eyebrow">
                JUST US
              </p>

              <h2>
                My Favourite
                <br />
                <span>Memories</span>
              </h2>

              <p>
                Every picture has a story.
                Every story has you.
              </p>
            </div>

            <div className="couple-gallery">
              {couplePhotos.map(
                (photo, index) => (
                  <div
                    className="couple-frame"
                    key={photo}
                    onClick={() =>
                      setSelectedPhoto(photo)
                    }
                  >
                    <img
                      src={photo}
                      alt={`Our memory ${
                        index + 1
                      }`}
                    />

                    <span className="gallery-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>
                )
              )}
            </div>
          </section>

          {/* =========================
              MOMENTS
          ========================== */}
          <section
            className="content-section moments-section"
            id="memories"
          >
            <div className="section-title">
              <p className="eyebrow">
                OUR LITTLE CHAPTERS
              </p>

              <h2>
                Moments I
                <br />
                <span>Never Want To Forget</span>
              </h2>

              <p>
                Open each chapter.
              </p>
            </div>

            <div className="moment-list">
              {moments.map((moment) => (
                <button
                  key={moment.id}
                  className={`moment-card ${moment.theme}`}
                  onClick={() =>
                    openMoment(moment)
                  }
                >
                  <span className="moment-number">
                    {moment.number}
                  </span>

                  <span className="moment-icon">
                    {moment.emoji}
                  </span>

                  <span className="moment-details">
                    <strong>
                      {moment.title}
                    </strong>

                    <small>
                      {moment.subtitle}
                    </small>
                  </span>

                  <span className="moment-arrow">
                    →
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* =========================
              LOVE
          ========================== */}
          <section
            className="love-section"
            id="love"
          >
            <div className="love-overlay"></div>

            <div className="love-content">
              <p className="eyebrow light">
                ONE YEAR OF US
              </p>

              <h2>
                365 Days.
                <br />
                Countless Memories.
                <br />
                <span>One Person. You.</span>
              </h2>

              <div className="love-line">
                ♡
              </div>

              <p>
                One whole year of loving you,
                annoying you, fighting with you,
                laughing with you and creating
                memories that I never want to forget.
              </p>

              <p>
                Somehow, through every good day
                and every difficult day,
                it was always still you.
              </p>

              <div className="love-bottom">
                ♡ &nbsp; ❤️ &nbsp; ♡
              </div>
            </div>
          </section>

          {/* =========================
              WIFE QUESTION
          ========================== */}
          <section className="forever-section">
            <div className="forever-overlay"></div>

            <div className="forever-card">
              <div className="ring">
                💍
              </div>

              <p className="eyebrow">
                ONE LAST QUESTION...
              </p>

              <h2>
                Will you be my
                <br />
                <span>wife forever?</span>
              </h2>

              <p>
                After everything we've been through,
                <br />
                I still choose you.
                Every single time.
              </p>

              <div className="forever-buttons">
                <button
                  onClick={() =>
                    setForeverAnswer(true)
                  }
                >
                  YES, FOREVER ❤️
                </button>

                <button
                  onClick={() =>
                    setForeverAnswer(true)
                  }
                >
                  YESSS 💍🥹
                </button>
              </div>
            </div>
          </section>

          {/* =========================
              LETTER
          ========================== */}
          <section className="letter-section">
            <div className="letter-card">
              <div className="letter-icon">
                💌
              </div>

              <p className="eyebrow">
                SOMETHING FROM MY HEART
              </p>

              <h2>
                A Letter
                <br />
                <span>For My Kunjii</span>
              </h2>

              <p>
                Some things are easier to write
                than say.
              </p>

              <button
                onClick={() =>
                  setShowLetter(true)
                }
              >
                Read My Letter ♡
              </button>
            </div>
          </section>

          {/* =========================
              FOOTER
          ========================== */}
          <footer className="footer">
            <div className="footer-heart">
              ♡
            </div>

            <p>
              Made with all my love
            </p>

            <h3>
              Shanjai ♡ Dhanishka
            </h3>

            <p className="footer-date">
              02.10.2025 → ∞
            </p>

            <p className="footer-last">
              Our story is only beginning.
            </p>
          </footer>
        </div>
      )}

      {/* =========================
          PHOTO VIEW
      ========================== */}
      {selectedPhoto && (
        <div
          className="photo-lightbox"
          onClick={() =>
            setSelectedPhoto(null)
          }
        >
          <button
            className="lightbox-close"
            onClick={() =>
              setSelectedPhoto(null)
            }
          >
            ×
          </button>

          <img
            src={selectedPhoto}
            alt="Our memory"
            onClick={(event) =>
              event.stopPropagation()
            }
          />
        </div>
      )}

      {/* =========================
          LETTER MODAL
      ========================== */}
      {showLetter && (
        <div className="letter-modal">
          <div className="letter-wrapper">
            <button
              className="letter-close"
              onClick={() =>
                setShowLetter(false)
              }
            >
              ×
            </button>

            <div className="letter-paper">
              <div className="paper-heart">
                ♡
              </div>

              <p className="paper-date">
                02.10.2026
              </p>

              <h2>
                My dear bharyaa,
              </h2>

              <div className="letter-text">
                <p>
                  Hey kunjii cute kunjii...
                  enaku rombaaa happy haa irruku.
                  Literally 1 yr! Yeppie yeppie
                  yeppie yeppie yeppie! 🥹❤️
                </p>

                <p>
                  Romba perumaya irruku dii
                  Dhanishka. Like indha robot
                  kooda nee epdi ivalo naaal
                  irundha nu therlaaaa 😭❤️
                </p>

                <p>
                  En life la enaku nee nariya
                  happiness kuduthurukaaa.
                  Literally naa un kooda iruka
                  modhu dha naa romba sandhosama
                  irundhen.
                </p>

                <p>
                  Naa nanave irundhena apo dha...
                  en life oru maari irundhuchu.
                  Aana nee en life la vandhiyo,
                  apove maariduchu.
                </p>

                <p>
                  Ellame literally ellame
                  maariduchu. Avalo happy aana
                  memories un kooda irruku.
                </p>

                <p>
                  Indha 1 yr la nammakula nariya
                  sandaigal, hurtful moments,
                  misunderstandings and nariya
                  vishayangal nadandhuruku.
                  Aana adhellam thaandi namma
                  innum inga irukom. ❤️
                </p>

                <p>
                  Sollapona literally enaku
                  rombaaa sandhosama irruku
                  dii kunjii.
                </p>

                <p className="big-love">
                  I LOVEEEEEE YOUUUUUUUUU
                  <br />
                  SOOOOOOOOOOOOO MUCHHHHHHHHH ❤️
                </p>

                <p>
                  Like first ever... you know
                  andha starting stage marakave
                  maaten. Aapdi bayama literally
                  oru butterfly stage. 🦋😭
                </p>

                <p>
                  But ipo namma nalla palagitom
                  and comfortable aavum aagitom.
                  And that's something I really
                  love about us.
                </p>

                <p>
                  Naa chinna vayasula irundhu
                  pray panitu varen. Adhuku
                  palana nee enaku kedaichirukaaa
                  nu sometimes yosipen. 🥹
                </p>

                <p>
                  Naa una nalla pathupen dii.
                  I promise youuu.
                </p>

                <p>
                  Enaku ore oru aasai dha...
                  enna nalla pathukongaaa.
                  Badhirama irunga.
                </p>

                <p>
                  Enaku una rombaaaa pudikum.
                  Un eyes irruku laa...
                  adhula mayangina payan dha naa.
                </p>

                <p>
                  I am soo attracted to you
                  physically, mentally and
                  emotionally. You're genuinely
                  very special to me.
                </p>

                <p className="ending-love">
                  I LOVE YOUUUUUUUUUUU
                  <br />
                  SOOOOOOOOOOOOO MUCHHHHHHHHH ❤️
                </p>

                <p className="kiss">
                  Ummaaaaa 💋
                </p>
              </div>

              <div className="signature">
                With all my love,
                <br />
                <strong>
                  Shanjai ❤️
                </strong>
              </div>

              <div className="anniversary-ending">
                Happiest First Year Anniversary
                💋💋💋❤️❤️
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================
          FOREVER RESULT
      ========================== */}
      {foreverAnswer && (
        <div className="result-screen">
          <div className="falling-heart h1">
            ❤️
          </div>

          <div className="falling-heart h2">
            💋
          </div>

          <div className="falling-heart h3">
            🤍
          </div>

          <div className="falling-heart h4">
            ❤️
          </div>

          <div className="result-card">
            <div className="result-ring">
              💍
            </div>

            <p className="result-eyebrow">
              IT'S OFFICIAL
            </p>

            <h2>
              Congratulations!!! 🥹❤️
            </h2>

            <p className="result-main">
              You have officially become
              <br />
              <span>
                Shanjai's wifeee foreverrr
              </span>{" "}
              💍❤️
            </p>

            <div className="result-divider">
              ♡
            </div>

            <p className="result-message">
              No returns.
              <br />
              No refunds.
              <br />
              No escape. 😭😂❤️
            </p>

            <p className="forever-start">
              Forever starts now. ♾️
            </p>

            <div className="result-kisses">
              💋 ❤️ 💋
            </div>

            <button
              onClick={() =>
                setForeverAnswer(false)
              }
            >
              Continue Our Story ♡
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;