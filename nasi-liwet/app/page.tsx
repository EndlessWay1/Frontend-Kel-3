
const recipes = [
  {
    name: "Nasi Liwet Sunda",
    description:
      "Nasi liwet khas Sunda dengan aroma rempah dan cita rasa gurih yang khas.",
    category: "Sunda",
    time: "45 menit",
    method: "Tradisional",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Nasi Liwet Solo",
    description:
      "Nasi liwet khas Solo dengan rasa gurih yang disajikan bersama lauk pelengkap.",
    category: "Solo",
    time: "50 menit",
    method: "Tradisional",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Nasi Liwet Praktis",
    description:
      "Resep nasi liwet praktis yang dapat dibuat menggunakan rice cooker di rumah.",
    category: "Rice Cooker",
    time: "30 menit",
    method: "Rice Cooker",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Home() {
  return (
    <main className="home-wrapper">
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-tag">KULINER NUSANTARA</span>

          <h1>
            Nikmati Kelezatan
            <span>Nasi Liwet</span>
            Nusantara
          </h1>

          <p>
            Temukan berbagai resep nasi liwet khas Nusantara, mulai dari cita
            rasa Sunda hingga Solo yang dapat kamu buat sendiri di rumah.
          </p>

          <div className="home-hero-buttons">
            <a href="/recipes" className="home-primary-btn">
              Jelajahi Resep
            </a>

            <a href="#about" className="home-secondary-btn">
              Tentang Kami
            </a>
          </div>
        </div>

        <div className="home-hero-image">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80"
              alt="Nasi Liwet"
            />
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <span className="home-section-tag">REKOMENDASI</span>
          <h2>Resep Pilihan</h2>
          <p>Beberapa pilihan resep nasi liwet yang dapat kamu coba.</p>
        </div>

        <div className="row g-4">
          {recipes.map((recipe) => (
            <div className="col-lg-4 col-md-6" key={recipe.name}>
              <div className="home-recipe-card">
                <div className="home-recipe-image">
                  <img src={recipe.image} alt={recipe.name} />
                  <span className="home-recipe-badge">
                    {recipe.category}
                  </span>
                </div>

                <div className="home-recipe-body">
                  <h3>{recipe.name}</h3>
                  <p>{recipe.description}</p>

                  <div className="home-recipe-info">
                    <span>🕒 {recipe.time}</span>
                    <span>🍳 {recipe.method}</span>
                  </div>

                  <a href="/recipes" className="home-recipe-button">
                    Lihat Resep
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-about" id="about">
        <div className="home-about-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
            alt="Kuliner Nusantara"
          />
        </div>

        <div className="home-about-content">
          <span className="home-section-tag">TENTANG NASI LIWET</span>

          <h2>Mengenal Cita Rasa Kuliner Nusantara</h2>

          <p>
            Nasi liwet merupakan salah satu hidangan khas Indonesia yang
            memiliki beragam variasi di berbagai daerah. Setiap daerah
            memiliki cara memasak dan cita rasa yang berbeda.
          </p>

          <p>
            Melalui Nasi Liwet Nusantara, kamu dapat menemukan berbagai resep
            dan metode memasak nasi liwet dengan mudah.
          </p>

          <a href="/recipes" className="home-primary-btn">
            Lihat Semua Resep
          </a>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <span className="home-section-tag">MULAI MEMASAK</span>

          <h2>Temukan Resep Favoritmu</h2>

          <p>
            Jelajahi koleksi resep nasi liwet Nusantara dan temukan hidangan
            yang ingin kamu coba.
          </p>
        </div>

        <a href="/recipes" className="home-cta-button">
          Jelajahi Resep
        </a>
      </section>
    </main>
  );
}
