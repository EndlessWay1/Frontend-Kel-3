"use client";

import { useState } from "react";
import { mockRecipes } from "./recipesData";
import styles from "./recipes.module.css";
import Image from "next/image";

const filterOptions = [
  { label: "Semua Resep", value: "all" },
  { label: "Khas Sunda", value: "sunda" },
  { label: "Khas Solo", value: "solo" },
  { label: "Rice Cooker", value: "rice-cooker" },
  { label: "Tradisional", value: "tradisional" },
];

export default function RecipesPage() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // filter data resep berdasarkan kategori/metode dan query pencarian
  const filteredRecipes = mockRecipes.filter((item) => {
    let matchCat = false;
    if (currentFilter === "all") {
      matchCat = true;
    } else if (
      item.category === currentFilter ||
      item.method === currentFilter
    ) {
      matchCat = true;
    }

    let matchText = false;
    const query = searchQuery.toLowerCase().trim();
    if (query === "") {
      matchText = true;
    } else {
      const judul = item.title.toLowerCase();
      const deskripsi = item.description.toLowerCase();
      if (judul.includes(query) || deskripsi.includes(query)) {
        matchText = true;
      }
    }

    return matchCat && matchText;
  });

  return (
    <div className={styles.pageBackground}>
      <main className={styles.recipesWrapper}>
        {/* bagian heading / hero */}
        <section className={styles.recipesHeading}>
          <span className={styles.recipesHeadingTag}>
            Koleksi Kuliner Nusantara
          </span>
          <h1 className={styles.recipesHeadingTitle}>
            Katalog Resep Nasi Liwet
          </h1>
          <p className={styles.recipesHeadingDesc}>
            Kumpulan resep nasi liwet khas Sunda dan Solo dengan beragam metode
            memasak.
          </p>

          <div className={styles.recipeSearchBox}>
            <input
              type="text"
              className={styles.recipeSearchInput}
              placeholder="Cari resep, bahan, atau metode"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
        </section>

        {/* bagian filter */}
        <section className={styles.recipesFilterSection}>
          <div className={styles.recipesFilterBar}>
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={`${styles.filterBtn} ${
                  currentFilter === opt.value ? styles.filterBtnActive : ""
                }`}
                onClick={() => setCurrentFilter(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className={styles.recipesCount}>
            {filteredRecipes.length > 0 &&
              `Menampilkan ${filteredRecipes.length} resep`}
          </div>
        </section>

        {/* daftar resep */}
        <section>
          <div className={styles.recipesGrid}>
            {filteredRecipes.length === 0 ? (
              <div className={styles.recipesEmpty}>
                <h4>Tidak ada resep yang ditemukan</h4>
                <p>Coba gunakan kata kunci lain atau ubah filter di atas.</p>
              </div>
            ) : (
              filteredRecipes.map((recipe) => (
                <article key={recipe.id} className={styles.recipeCard}>
                  <div className={styles.recipeImgWrap}>
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={400}
                      height={200}
                      className={styles.recipeImg}
                    />
                    <span className={styles.recipeBadge}>
                      {recipe.categoryLabel}
                    </span>
                    <span className={styles.recipeMethodBadge}>
                      {recipe.methodLabel}
                    </span>
                  </div>

                  <div className={styles.recipeCardBody}>
                    <div className={styles.recipePendukung}>
                      <span>⏱ {recipe.time}</span>
                      <span>👥 {recipe.servings}</span>
                    </div>

                    <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                    <p className={styles.recipeDesc}>{recipe.description}</p>

                    <div className={styles.recipeIngredients}>
                      <div className={styles.recipeIngredientsLabel}>
                        Bahan Utama
                      </div>
                      <div className={styles.ingredientTags}>
                        {recipe.generalIngredients.map((ing, idx) => (
                          <span key={idx} className={styles.ingredientTag}>
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.recipeCardFooter}>
                      <span className={styles.recipeSource}>
                        Sumber: {recipe.source}
                      </span>
                      <a href="#" className={styles.recipeLinkBtn}>
                        Lihat Resep
                      </a>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
