"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useCsrf } from "@/app/context/csrf/CsrfContext";
import { useUser } from "@/app/hook/useUser";
import { Recipe } from "@/app/recipes/recipesData";
import styles from "@/app/recipes/recipes.module.css";

export default function FavoritePageComponent() {
  const { user } = useUser();
  const { csrfToken } = useCsrf();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  // Fetch favorite recipes
  useEffect(() => {
    if (!user) return;

    let cancelled = false;

    async function fetchFavorites() {
      try {
        setLoading(true);

        const res = await fetch("/api/favorites", {
          method: "GET",
          credentials: "same-origin",
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Gagal mengambil resep favorit.");
        }

        const data = await res.json();

        if (!cancelled) {
          setRecipes(
            (data.posts || []).map((post: Recipe) => ({
              ...post,
              favorite: true,
            })),
          );
        }
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

    fetchFavorites();

    return () => {
      cancelled = true;
    };
  }, [user]);

  // Remove a recipe from favorites
  const removeFavorite = async (postId: string) => {
    const previousRecipes = recipes;

    setRemovingId(postId);

    // Optimistically remove from UI
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== postId));

    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ postId, reject: true }),
      });

      if (!res.ok) {
        throw new Error("Gagal menghapus resep favorit.");
      }
    } catch (err) {
      console.error(err);
      setRecipes(previousRecipes);
      setError("Gagal menghapus resep favorit. Silakan coba lagi.");
    } finally {
      setRemovingId(null);
    }
  };

  return (
    <div className={styles.pageBackground}>
      <main className={styles.recipesWrapper}>
        <section className={styles.recipesHeading}>
          <span className={styles.recipesHeadingTag}>Koleksi Pribadi</span>

          <h1 className={styles.recipesHeadingTitle}>Resep Favorit</h1>

          <p className={styles.recipesHeadingDesc}>
            Kumpulan resep nasi liwet yang telah kamu simpan sebagai favorit.
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
                <h4>Belum ada resep favorit</h4>
                <p>
                  Simpan resep yang kamu sukai dengan menekan tombol bintang
                  pada halaman resep.
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
                      disabled={removingId === recipe.id}
                      onClick={() => removeFavorite(String(recipe.id))}
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
                      {removingId === recipe.id ? "..." : "★"}
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
