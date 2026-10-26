"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent, type KeyboardEvent } from "react";
import styles from "./create-recipe.module.css";

type Item = { id: number; value: string };
type Group = { id: number; name: string; items: Item[] };

const LABELS = {
  category: { sunda: "Khas Sunda", solo: "Khas Solo" },
  method: { "rice-cooker": "Rice Cooker", tradisional: "Tradisional" },
} as const;

let counter = 0;
const uid = () => ++counter;
const blank = (): Item => ({ id: uid(), value: "" });
const clean = (items: Item[]) => items.map((i) => i.value.trim()).filter(Boolean);

export default function CreateRecipeForm({ userName }: { userName: string }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<keyof typeof LABELS.category>("sunda");
  const [method, setMethod] = useState<keyof typeof LABELS.method>("rice-cooker");
  const [time, setTime] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");
  const [source, setSource] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [groups, setGroups] = useState<Group[]>(() => [
    { id: uid(), name: "Bumbu Halus", items: [blank()] },
    { id: uid(), name: "Bahan Utama", items: [blank()] },
  ]);
  const [steps, setSteps] = useState<Item[]>(() => [blank(), blank()]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [imgBroken, setImgBroken] = useState(false);

  // ---------- tags (saved as generalIngredients) ----------
  const addTag = (raw: string) => {
    const t = raw.trim().replace(/,$/, "").trim();
    if (t && !tags.some((x) => x.toLowerCase() === t.toLowerCase())) setTags([...tags, t]);
    setTagInput("");
  };
  const onTagKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(tagInput);
    } else if (e.key === "Backspace" && !tagInput && tags.length) {
      setTags(tags.slice(0, -1));
    }
  };

  // ---------- ingredient groups ----------
  const patchGroup = (gid: number, fn: (g: Group) => Group) =>
    setGroups(groups.map((g) => (g.id === gid ? fn(g) : g)));

  // ---------- steps ----------
  const patchStep = (id: number, value: string) =>
    setSteps(steps.map((s) => (s.id === id ? { ...s, value } : s)));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const ingredients = groups
      .map((g) => ({ group: g.name.trim(), items: clean(g.items) }))
      .filter((g) => g.group && g.items.length);
    const instructions = clean(steps);

    const err: Record<string, string> = {};
    if (!title.trim()) err.title = "Add a title for your recipe.";
    if (!time.trim()) err.time = "Enter a cook time, e.g. 45 menit.";
    if (!servings.trim()) err.servings = "Enter how many servings this makes.";
    if (description.trim().length < 10) err.description = "Write a description of at least 10 characters.";
    if (!tags.length) err.tags = "Add at least one tag.";
    if (!ingredients.length) err.ingredients = "Add at least one ingredient group with a name and items.";
    if (!instructions.length) err.steps = "Add at least one step.";
    setErrors(err);
    if (Object.keys(err).length) return;

    setSaving(true);
    try {
      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          category,
          method,
          time: time.trim(),
          servings: servings.trim(),
          image: image.trim(),
          source: source.trim(),
          description: description.trim(),
          generalIngredients: tags,
          ingredients,
          instructions,
        }),
      });
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrors({ form: data.error ?? "Could not save the recipe." });
        return;
      }
      router.push("/recipes");
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className={styles.page}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <h1 className={styles.title}>Share your nasi liwet</h1>
        <p className={styles.sub}>
          Posting as <strong>{userName}</strong>. Every field is required except image and source.
        </p>

        <form onSubmit={onSubmit} noValidate>
          <div className="row g-4">
            <div className="col-lg-7">
              <section className={styles.card}>
                <h2>The basics</h2>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="title">Title</label>
                  <input className={styles.input} id="title" maxLength={80} value={title}
                    onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Nasi Liwet Sunda Teri" />
                  <div className={styles.error}>{errors.title}</div>
                </div>

                <div className="row g-3">
                  <div className={`col-sm-6 ${styles.field}`}>
                    <label className={styles.label} htmlFor="category">Category</label>
                    <select className={styles.input} id="category" value={category}
                      onChange={(e) => setCategory(e.target.value as keyof typeof LABELS.category)}>
                      <option value="sunda">Khas Sunda</option>
                      <option value="solo">Khas Solo</option>
                    </select>
                  </div>
                  <div className={`col-sm-6 ${styles.field}`}>
                    <label className={styles.label} htmlFor="method">Cooking method</label>
                    <select className={styles.input} id="method" value={method}
                      onChange={(e) => setMethod(e.target.value as keyof typeof LABELS.method)}>
                      <option value="rice-cooker">Rice Cooker</option>
                      <option value="tradisional">Tradisional</option>
                    </select>
                  </div>
                  <div className={`col-sm-6 ${styles.field}`}>
                    <label className={styles.label} htmlFor="time">Cook time</label>
                    <input className={styles.input} id="time" value={time}
                      onChange={(e) => setTime(e.target.value)} placeholder="e.g. 45 menit" />
                    <div className={styles.error}>{errors.time}</div>
                  </div>
                  <div className={`col-sm-6 ${styles.field}`}>
                    <label className={styles.label} htmlFor="servings">Servings</label>
                    <input className={styles.input} id="servings" value={servings}
                      onChange={(e) => setServings(e.target.value)} placeholder="e.g. 4 porsi" />
                    <div className={styles.error}>{errors.servings}</div>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="image">Image URL (optional)</label>
                  <input className={styles.input} id="image" value={image}
                    onChange={(e) => { setImage(e.target.value); setImgBroken(false); }} placeholder="https://..." />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="source">Source (optional)</label>
                  <input className={styles.input} id="source" value={source}
                    onChange={(e) => setSource(e.target.value)} placeholder="e.g. Resep keluarga" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="description">Description</label>
                  <textarea className={styles.input} id="description" rows={3} maxLength={300} value={description}
                    onChange={(e) => setDescription(e.target.value)} placeholder="What makes your version special?" />
                  <div className={styles.error}>{errors.description}</div>
                </div>
              </section>

              <section className={styles.card}>
                <h2>Tags</h2>
                <p className={styles.hint}>Main ingredients shown as chips on the recipe card. Type one and press Enter.</p>
                <div className={styles.tagbox}>
                  {tags.map((t, i) => (
                    <span key={t} className={styles.chip}>
                      {t}
                      <button type="button" aria-label={`Remove ${t}`}
                        onClick={() => setTags(tags.filter((_, n) => n !== i))}>&times;</button>
                    </span>
                  ))}
                  <input className={styles.tagInput} value={tagInput} placeholder="e.g. Ikan Teri"
                    onChange={(e) => setTagInput(e.target.value)} onKeyDown={onTagKey}
                    onBlur={() => addTag(tagInput)} />
                </div>
                <div className={styles.error}>{errors.tags}</div>
              </section>

              <section className={styles.card}>
                <h2>Ingredients</h2>
                <p className={styles.hint}>Group them like a recipe card, e.g. &quot;Bumbu Halus&quot;, &quot;Bahan Utama&quot;.</p>
                {groups.map((g) => (
                  <div key={g.id} className={styles.group}>
                    <div className={styles.groupHead}>
                      <input className={styles.input} value={g.name} placeholder="Group name e.g. Bumbu Halus"
                        onChange={(e) => patchGroup(g.id, (x) => ({ ...x, name: e.target.value }))} />
                      <button type="button" className={styles.x} aria-label="Remove group"
                        onClick={() => setGroups(groups.filter((x) => x.id !== g.id))}>&times;</button>
                    </div>
                    {g.items.map((it) => (
                      <div key={it.id} className={styles.row}>
                        <input className={styles.input} value={it.value} placeholder="e.g. 5 siung bawang merah"
                          onChange={(e) => patchGroup(g.id, (x) => ({
                            ...x, items: x.items.map((i) => (i.id === it.id ? { ...i, value: e.target.value } : i)),
                          }))} />
                        <button type="button" className={styles.x} aria-label="Remove item"
                          onClick={() => patchGroup(g.id, (x) => ({ ...x, items: x.items.filter((i) => i.id !== it.id) }))}>&times;</button>
                      </div>
                    ))}
                    <button type="button" className={`${styles.pill} ${styles.pillAdd}`}
                      onClick={() => patchGroup(g.id, (x) => ({ ...x, items: [...x.items, blank()] }))}>Add item</button>
                  </div>
                ))}
                <div className={styles.error}>{errors.ingredients}</div>
                <button type="button" className={`${styles.pill} ${styles.pillAdd}`}
                  onClick={() => setGroups([...groups, { id: uid(), name: "", items: [blank()] }])}>Add group</button>
              </section>

              <section className={styles.card}>
                <h2>Instructions</h2>
                <div className={styles.steps}>
                  {steps.map((s) => (
                    <div key={s.id} className={styles.row}>
                      <textarea className={styles.input} rows={2} value={s.value} placeholder="e.g. Cuci beras hingga bersih"
                        onChange={(e) => patchStep(s.id, e.target.value)} />
                      <button type="button" className={styles.x} aria-label="Remove step"
                        onClick={() => setSteps(steps.filter((x) => x.id !== s.id))}>&times;</button>
                    </div>
                  ))}
                </div>
                <div className={styles.error}>{errors.steps}</div>
                <button type="button" className={`${styles.pill} ${styles.pillAdd}`}
                  onClick={() => setSteps([...steps, blank()])}>Add step</button>
              </section>
            </div>

            <div className="col-lg-5">
              <aside className={styles.preview}>
                <p className={styles.hint}>Preview, as it appears in the recipe list</p>
                <article className={styles.pv}>
                  <div className={styles.pvImgWrap}>
                    {image.trim() && !imgBroken ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className={styles.pvImg} src={image.trim()} alt="" onError={() => setImgBroken(true)} />
                    ) : (
                      <span>No image yet</span>
                    )}
                    <span className={styles.badge}>{LABELS.category[category]}</span>
                    <span className={`${styles.badge} ${styles.badgeAlt}`}>{LABELS.method[method]}</span>
                  </div>
                  <div className={styles.pvBody}>
                    <div className={styles.meta}>
                      <span>{time.trim() || "Cook time"}</span>
                      <span>{servings.trim() || "Servings"}</span>
                    </div>
                    <h3>{title.trim() || "Your recipe title"}</h3>
                    <p>{description.trim() || "Your description will appear here."}</p>
                    <div className={styles.chips}>
                      {tags.map((t) => <span key={t} className={styles.chip}>{t}</span>)}
                    </div>
                    <small>Sumber: {source.trim() || userName}</small>
                  </div>
                </article>

                <div className={styles.error}>{errors.form}</div>
                <div className={styles.actions}>
                  <button type="submit" disabled={saving} className={`${styles.pill} ${styles.pillDark}`}>
                    {saving ? "Publishing..." : "Publish recipe"}
                  </button>
                  <Link href="/recipes" className={styles.pill}>Cancel</Link>
                </div>
              </aside>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
