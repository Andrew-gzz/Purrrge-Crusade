type LinkItem = {
  label: string;
  description: string;
  href: string;
  icon: string;
  variant?: "primary" | "secondary";
};

type VideoItem = {
  title: string;
  description: string;
  embedUrl: string;
};

const mainLinks: LinkItem[] = [
  {
    label: "Instagram",
    description: "Sígueme y mira avances del proyecto",
    href: "https://www.instagram.com/0andrew_4/",
    icon: "/assets/instagram.png",
    variant: "primary",
  },
  {
    label: "LinkedIn",
    description: "Conecta conmigo profesionalmente",
    href: "https://www.linkedin.com/in/andres-gzz",
    icon: "/assets/linkedin.png",
  },
  {
    label: "GitHub",
    description: "Revisa mis proyectos y código",
    href: "https://github.com/Andrew-gzz",
    icon: "/assets/github.png",
  },
];

const videos: VideoItem[] = [
  {
    title: "Video narrativo",
    description: "Conoce el tono, mundo y concepto de Purrrge Crusade.",
    embedUrl: "https://www.youtube.com/embed/gnBhrtx5wRw?si=rs4b81DH6CIyJsTx",
  },
  {
    title: "Gameplay",
    description: "Una muestra rápida del proyecto para Expo LMAD.",
    embedUrl: "https://www.youtube.com/embed/gPkhTBIsAMI?si=aJ79MZCncS_80n5-",
  },
];

const teamMembers = [
  { name: "Areli", image: "/assets/fish.PNG" },
  { name: "Andrés", image: "/assets/cat-green.PNG" },
  { name: "Josh", image: "/assets/cat-red.PNG" },
  { name: "Jesús", image: "/assets/cat-wizard.PNG" },
  { name: "Rey", image: "/assets/blue-cat.PNG" },
  { name: "Eliud", image: "/assets/fish.PNG" },
];
export default function Landing() {
  return (
    <main className="purrge-page">
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8">
              <article className="hero-card text-center">
                <p className="event-badge mb-3">EXPO LMAD 2026</p>

                <h1 className="game-title">Purrrge Crusade</h1>

                <p className="game-subtitle">
                  Un videojuego multijugador online de fantasía medieval con
                  gatos, bombas, estrategia y caos dentro de una antigua
                  mazmorra.
                </p>

                <div className="hero-tags">
                  <span>Online Multiplayer</span>
                  <span>Unreal Engine</span>
                  <span>2v2</span>
                  <span>Game Dev</span>
                </div>

                <div className="mt-4">
                  <a
                    href="#videos"
                    className="btn btn-purrge-primary me-2 mb-2"
                  >
                    Ver gameplay
                  </a>

                  <a
                    href="https://www.linkedin.com/in/andres-gzz"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-purrge-outline mb-2"
                  >
                    Seguir avances
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="links-section">
        <div className="container">
          <div className="row justify-content-center g-3">
            <div className="col-12 col-lg-8 col-xl-7">
              {mainLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`link-card ${
                    item.variant === "primary" ? "link-card-featured" : ""
                  }`}
                >
                  <div className="link-icon">
                    {item.icon.startsWith("/") ? (
                      <img src={item.icon} alt="" aria-hidden="true" />
                    ) : (
                      item.icon
                    )}
                  </div>

                  <div className="link-content">
                    <h2>{item.label}</h2>
                    <p>{item.description}</p>
                  </div>

                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-12 col-lg-8 col-xl-7">
              <div className="content-card">
                <p className="section-kicker">Sobre el juego</p>

                <h2>
                  Gatos aventureros, una criatura mística y una mazmorra
                  caótica.
                </h2>

                <p>
                  En Purrrge Crusade, cuatro gatos compiten en equipos para
                  controlar una criatura dorada y llevarla hacia su zona de
                  victoria. El combate es importante, pero la clave está en
                  manipular el entorno, activar mecanismos, usar bombas y
                  dominar el mapa.
                </p>

                <div className="row g-3 mt-2">
                  <div className="col-6 col-md-3">
                    <div className="mini-stat">
                      <strong>4</strong>
                      <span>Jugadores</span>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div className="mini-stat">
                      <strong>2v2</strong>
                      <span>Equipos</span>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div className="mini-stat">
                      <strong>UE</strong>
                      <span>Unreal</span>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div className="mini-stat">
                      <strong>Online</strong>
                      <span>Multiplayer</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card mt-4">
                <p className="section-kicker">Mi participación</p>

                <h2>Programación, gameplay y multijugador.</h2>

                <p>
                  Mi rol principal dentro del proyecto ha estado enfocado en
                  programación: mecánicas de gameplay, interfaz, selección de
                  personajes, armas, modos de juego y pruebas de
                  replicación/multijugador en Unreal Engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="videos-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-7 text-center">
              <p className="section-kicker">Videos</p>
              <h2 className="section-title">Mira Purrrge Crusade en acción</h2>
            </div>
          </div>

          <div className="row justify-content-center g-4 mt-1">
            {videos.map((video) => (
              <div key={video.title} className="col-12 col-lg-6">
                <article className="video-card">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>

                  <div className="video-info">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-7">
              <div className="content-card">
                <p className="section-kicker">Equipo</p>
                <h2>Creado en colaboración con:</h2>

                <div className="row g-3 mt-2">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="col-4">
                      <div className="team-member-card">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="team-member-img"
                        />
                        <span>{member.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section text-center">
        <div className="container">
          <p className="mb-1">Presentando en Expo LMAD 2026</p>
          <small>
            Purrrge Crusade · Pagina desarrollada con React y Bootstrap
          </small>
        </div>
      </footer>
    </main>
  );
}
