"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Recipe } from "./recipesData";
import styles from "./recipes.module.css";
import { useUser } from "../hook/useUser";
import { useCsrf } from "../context/csrf/CsrfContext";

const filterOptions = [
  { label: "Semua Resep", value: "all" },
  { label: "Khas Sunda", value: "sunda" },
  { label: "Khas Solo", value: "solo" },
  { label: "Rice Cooker", value: "rice-cooker" },
  { label: "Tradisional", value: "tradisional" },
];

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useUser();
  const { csrfToken } = useCsrf();

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch("/api/recipes");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setRecipes(data);
          }
        }
      } catch (err) {
        console.error("Gagal load resep dari API:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((item) => {
    const matchesFilter =
      currentFilter === "all" ||
      item.category === currentFilter ||
      item.method === currentFilter;

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      (item.generalIngredients &&
        item.generalIngredients.some((tag) =>
          tag.toLowerCase().includes(query),
        ));

    return matchesFilter && matchesQuery;
  });

  const toggleFavorite = async (
    recipeId: string | number,
    reject: boolean | undefined,
  ) => {
    if (!user) {
      window.location.replace("/login");
      return;
    }

    const previousRecipes = recipes;

    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, favorite: reject } : recipe,
      ),
    );

    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ postId: recipeId, reject: !reject }),
      });

      if (!res.ok) {
        setRecipes(previousRecipes);
      }
    } catch (err) {
      console.error("Failed to toggle favorite:", err);
      setRecipes(previousRecipes);
    }
  };

  return (
    <div className={styles.pageBackground}>
      <main className={styles.recipesWrapper}>
        <section className={styles.recipesHeading}>
          <span className={styles.recipesHeadingTag}>Koleksi Resep</span>
          <h1 className={styles.recipesHeadingTitle}>Resep Nasi Liwet</h1>
          <p className={styles.recipesHeadingDesc}>
            Daftar resep nasi liwet khas Sunda dan Solo dengan beragam pilihan
            cara memasak.
          </p>

          <div className={styles.recipeSearchBox}>
            <input
              type='text'
              className={styles.recipeSearchInput}
              placeholder='Cari resep, bahan, atau metode'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete='off'
            />
          </div>
        </section>

        <section className={styles.recipesFilterSection}>
          <div className={styles.recipesFilterBar}>
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                type='button'
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
            {!loading &&
              filteredRecipes.length > 0 &&
              `Menampilkan ${filteredRecipes.length} resep`}
          </div>
        </section>

        <section>
          <div className={styles.recipesGrid}>
            {loading ? (
              <div className={styles.recipesEmpty}>
                <h4>Memuat resep...</h4>
              </div>
            ) : filteredRecipes.length === 0 ? (
              <div className={styles.recipesEmpty}>
                <h4>Tidak ada resep yang ditemukan</h4>
                <p>Coba gunakan kata kunci lain atau ubah filter di atas.</p>
              </div>
            ) : (
              filteredRecipes.map((recipe, index) => (
                <article key={recipe.id} className={styles.recipeCard}>
                  <div className={styles.recipeImgWrap}>
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      priority={index < 3}
                      className={styles.recipeImg}
                    />
                    <span className={styles.recipeBadge}>
                      {recipe.categoryLabel}
                    </span>
                    <span className={styles.recipeMethodBadge}>
                      {recipe.methodLabel}
                    </span>
                    <button
                      style={{
                        fontSize: "250%",
                        color: "yellow",
                        zIndex: 10,
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        transform: "translate(0, -20%)",
                        border: "none",
                        background: "transparent",
                      }}
                      onClick={() =>
                        toggleFavorite(recipe.id, !recipe.favorite)
                      }
                    >
                      {recipe.favorite ? "★" : "☆"}
                    </button>
                  </div>

                  <div className={styles.recipeCardBody}>
                    <div className={styles.recipePendukung}>
                      <span>{recipe.time}</span>
                      <span>•</span>
                      <span>{recipe.servings}</span>
                    </div>

                    <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                    <p className={styles.recipeDesc}>{recipe.description}</p>

                    {recipe.generalIngredients &&
                      recipe.generalIngredients.length > 0 && (
                        <div className={styles.recipeIngredients}>
                          <div className={styles.recipeIngredientsLabel}>
                            Bahan Utama
                          </div>
                          <div className={styles.recipeTagsList}>
                            {recipe.generalIngredients.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className={styles.ingredientTag}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    <div className={styles.recipeCardFooter}>
                      <span className={styles.recipeSource}>
                        Sumber: {recipe.source}
                      </span>
                      <Link
                        href={`/recipes/${recipe.id}`}
                        className={styles.recipeLinkBtn}
                      >
                        Lihat Resep
                      </Link>
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
