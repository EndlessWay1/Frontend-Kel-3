import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Recipe, IngredientGroup } from "../recipesData";

interface RecipeDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const posts = await prisma.post.findMany({ select: { id: true } });
    return posts.map((p) => ({ id: p.id }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: RecipeDetailPageProps) {
  const { id } = await params;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      select: { title: true },
    });
    if (post) {
      return {
        title: `Nasi Liwet: ${post.title}`,
      };
    }
  } catch {
  }

  return {
    title: "Nasi Liwet: Resep Tidak Ditemukan",
  };
}

async function RecipeDetailContent({ params }: RecipeDetailPageProps) {
  const { id } = await params;

  let recipe: Recipe | null = null;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        Instruction: {
          orderBy: { instructionNo: "asc" },
        },
        Ingredients: {
          include: {
            IngredientsItems: true,
          },
        },
      },
    });

    if (post) {
      recipe = {
        id: post.id,
        title: post.title,
        category: post.category === "SUNDA" ? "sunda" : "solo",
        categoryLabel: post.category === "SUNDA" ? "Khas Sunda" : "Khas Solo",
        method: post.method === "RICECOOKER" ? "rice-cooker" : "tradisional",
        methodLabel: post.method === "RICECOOKER" ? "Rice Cooker" : "Tradisional",
        image: post.image || "/recipes/pictures/Foto 1.jpg",
        time: `${post.duration} menit`,
        servings: `${post.serving} porsi`,
        source: post.source || "Nasi Liwet Nusantara",
        description: post.description,
        ingredients: post.Ingredients.map((g) => ({
          group: g.ingredientName,
          items: g.IngredientsItems.map((it) => it.itemsName),
        })),
        instructions: post.Instruction.map((ins) => ins.instruction),
      };
    }
  } catch (err) {
    console.error("Gagal cari resep di database:", err);
  }

  if (!recipe) {
    return (
      <main className="recipes-wrapper">
        <div className="recipes-empty my-5">
          <h4>Resep tidak ditemukan</h4>
          <p className="mb-3">Resep yang Anda tuju tidak tersedia.</p>
          <Link href="/recipes" className="recipe-link-btn">
            Kembali ke Katalog Resep
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="recipes-wrapper">
      <section className="detail-hero-card">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <div className="d-flex gap-2 mb-2">
              <span
                className="badge"
                style={{ backgroundColor: "var(--kombu-dark)", color: "#fff" }}
              >
                {recipe.categoryLabel}
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "var(--spiced-light)", color: "#fff" }}
              >
                {recipe.methodLabel}
              </span>
            </div>

            <h1 className="detail-title">{recipe.title}</h1>

            <div className="detail-pendukung-bar">
              <span>Waktu: {recipe.time}</span>
              <span>Porsi: {recipe.servings}</span>
              <span>Sumber: {recipe.source}</span>
            </div>

            <p className="detail-desc">{recipe.description}</p>

            <div className="mt-4">
              <Link href="/recipes" className="recipe-link-btn">
                &larr; Kembali ke Katalog Resep
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="detail-img-wrap" style={{ position: "relative" }}>
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                priority
                sizes="(max-width: 991px) 100vw, 40vw"
                className="detail-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="row g-4 mt-1">
        <div className="col-12 col-lg-5">
          <div className="detail-section-card">
            <div className="detail-section-title">
              <span>Bahan-Bahan</span>
              <span className="detail-servings-badge">{recipe.servings}</span>
            </div>
            <div className="ingredients-list">
              {recipe.ingredients.map((groupObj: IngredientGroup, i: number) => (
                <div key={i}>
                  <div className="ingredient-group-title">
                    {groupObj.group}
                  </div>
                  <ul className="ingredient-list">
                    {groupObj.items.map((item: string, j: number) => (
                      <li key={j} className="ingredient-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <div className="detail-section-card">
            <div className="detail-section-title">
              <span>Langkah-Langkah Memasak</span>
            </div>
            <div className="instructions-list">
              {recipe.instructions.map((step: string, i: number) => (
                <div key={i} className="method-step-card">
                  <span className="method-step-num">Langkah {i + 1}</span>
                  <p className="method-step-text">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="detail-back-bar">
        <Link href="/recipes" className="recipe-link-btn">
          &larr; Kembali ke Semua Resep
        </Link>
      </div>
    </main>
  );
}

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  return (
    <Suspense
      fallback={
        <main className="recipes-wrapper">
          <div className="recipes-empty my-5">
            <h4>Loading...</h4>
          </div>
        </main>
      }
    >
      <RecipeDetailContent params={params} />
    </Suspense>
  );
}
