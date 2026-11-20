"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useCsrf } from "@/app/context/csrf/CsrfContext";
import { useUser } from "@/app/hook/useUser";
import { Recipe } from "@/app/recipes/recipesData";
import styles from "@/app/recipes/recipes.module.css";

export default function PostPageComponent() {
  const { user } = useUser();
  const { csrfToken } = useCsrf();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch favorite recipes
  useEffect(() => {
    if (!user) return;

    let cancelled = false;

    async function fetchMyPost() {
      try {
        setLoading(true);

        const res = await fetch("/api/recipes", {
          method: "GET",
          credentials: "same-origin",
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Gagal mengambil resep.");
        }

        const data = await res.json();

        if (!cancelled) {
          if (Array.isArray(data)) {
            setRecipes(data.filter((post: Recipe) => user!.id === post.userId));
          } else {
            setRecipes([]);
          }
        }
        console.log(user?.id);
        console.log(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError("Gagal memuat resep favorit.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchMyPost();

    return () => {
      cancelled = true;
    };
  }, [user]);

  // Remove a recipe from favorites
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
          <span className={styles.recipesHeadingTag}>Koleksi Pribadi</span>

          <h1 className={styles.recipesHeadingTitle}>Resep {user?.name}</h1>

          <p className={styles.recipesHeadingDesc}>
            Kumpulan resep nasi liwet yang telah kamu buat.
          </p>
        </section>

        <section>
          <div className={styles.recipesCount}>
            {!loading && `${recipes.length} resep favorit`}
          </div>

          {error && (
            <p role='alert' style={{ color: "red" }}>
              {error}
            </p>
          )}

          <div className={styles.recipesGrid}>
            {loading ? (
              <div className={styles.recipesEmpty}>
                <h4>Memuat resep favorit...</h4>
              </div>
            ) : recipes.length === 0 ? (
              <div className={styles.recipesEmpty}>
                <h4>Belum ada resep yang dibuat</h4>
                <p>
                  Buatlah resep nasi liwet yang dengan menekan tombol create
                  recipes pada header.
                </p>

                <Link href='/recipes' className={styles.recipeLinkBtn}>
                  Jelajahi Resep
                </Link>
              </div>
            ) : (
              recipes.map((recipe, index) => (
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
                      type='button'
                      aria-label={`Hapus ${recipe.title} dari favorit`}
                      title='Hapus dari favorit'
                      onClick={() =>
                        toggleFavorite(String(recipe.id), !recipe.favorite)
                      }
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
                        cursor: "pointer",
                      }}
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

                    {(recipe.generalIngredients
                      ? recipe.generalIngredients.length > 0
                      : false) && (
                      <div className={styles.recipeIngredients}>
                        <div className={styles.recipeIngredientsLabel}>
                          Bahan Utama
                        </div>

                        <div className={styles.recipeTagsList}>
                          {recipe.generalIngredients!.map((tag, i) => (
                            <span key={i} className={styles.ingredientTag}>
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
