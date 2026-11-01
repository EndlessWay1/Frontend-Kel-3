"use client";

import { useEffect, useState } from "react";
import "./admin.css";

type User = {
  id?: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN" | "MODERATOR";
  password?: string;
};

type Recipe = {
  id: string;
  title: string;
  category: "SUNDA" | "SOLO";
  method: "RICECOOKER" | "TRADISIONAL";
  duration: number;
  serving: number;
  source: string | null;
  description: string;
};

const emptyUser: User = { name: "", email: "", role: "USER", password: "" };

const emptyRecipe: Recipe = {
  id: "",
  title: "",
  category: "SUNDA",
  method: "RICECOOKER",
  duration: 0,
  serving: 0,
  source: "",
  description: "",
};

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const [userModalOpen, setUserModalOpen] = useState(false);
  const [recipeModalOpen, setRecipeModalOpen] = useState(false);

  const [editingUserIndex, setEditingUserIndex] = useState<number | null>(null);
  const [editingRecipeIndex, setEditingRecipeIndex] = useState<number | null>(null);

  const [userForm, setUserForm] = useState<User>(emptyUser);
  const [recipeForm, setRecipeForm] = useState<Recipe>(emptyRecipe);

  async function loadData() {
    const [u, r] = await Promise.all([
      fetch("/api/admin/users"),
      fetch("/api/admin/recipes"),
    ]);
    if (u.ok) setUsers(await u.json());
    if (r.ok) setRecipes(await r.json());
  }

  useEffect(() => {
    loadData();
  }, []);

  function openAddUser() {
    setEditingUserIndex(null);
    setUserForm({ ...emptyUser });
    setUserModalOpen(true);
  }

  function openEditUser(index: number) {
    setEditingUserIndex(index);
    setUserForm({ ...users[index], password: "" });
    setUserModalOpen(true);
  }

  async function saveUser() {
    const editing = editingUserIndex !== null ? users[editingUserIndex] : null;

    if (
      !userForm.name.trim() ||
      !userForm.email.trim() ||
      (!editing && !userForm.password)
    ) {
      alert("Please fill in all user fields.");
      return;
    }

    const res = await fetch(
      editing ? `/api/admin/users/${editing.id}` : "/api/admin/users",
      {
        method: editing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...userForm,
          name: userForm.name.trim(),
          email: userForm.email.trim(),
        }),
      }
    );

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error ?? "Something went wrong.");
      return;
    }

    await loadData();
    setUserModalOpen(false);
  }

  async function deleteUser(index: number) {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    const res = await fetch(`/api/admin/users/${users[index].id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error ?? "Could not delete user.");
      return;
    }
    await loadData();
  }

  function openEditRecipe(index: number) {
    setEditingRecipeIndex(index);
    setRecipeForm({ ...recipes[index] });
    setRecipeModalOpen(true);
  }

  async function saveRecipe() {
    if (editingRecipeIndex === null) return;

    if (
      !recipeForm.title.trim() ||
      !recipeForm.description.trim() ||
      recipeForm.duration <= 0 ||
      recipeForm.serving <= 0
    ) {
      alert("Please fill in all recipe fields.");
      return;
    }

    const res = await fetch(`/api/admin/recipes/${recipeForm.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...recipeForm, title: recipeForm.title.trim() }),
    });

    if (!res.ok) {
      alert("Could not save recipe.");
      return;
    }

    await loadData();
    setRecipeModalOpen(false);
  }

  async function deleteRecipe(index: number) {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    const res = await fetch(`/api/admin/recipes/${recipes[index].id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Could not delete recipe.");
      return;
    }
    await loadData();
  }

  return (
    <>
      <header id="header" />

      <main className="admin-wrapper">
        <section className="admin-heading">
          <div>
            <span className="admin-heading-tag">ADMINISTRATOR</span>
            <h1>Admin Dashboard</h1>
            <p>Kelola user dan resep yang tersedia di Nasi Liwet Nusantara.</p>
          </div>
        </section>

        {/* USER MANAGEMENT */}
        <section className="admin-section">
          <div className="admin-section-heading">
            <div>
              <span className="admin-section-tag">USER MANAGEMENT</span>
              <h2>User Management</h2>
            </div>

            <button
              type="button"
              className="admin-primary-btn"
              onClick={openAddUser}
            >
              + Add User
            </button>
          </div>

          <div className="admin-table-card">
            <div className="table-responsive">
              <table className="table admin-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center">
                        No users available.
                      </td>
                    </tr>
                  ) : (
                    users.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <div className="admin-actions">
                            <button
                              type="button"
                              className="admin-primary-btn"
                              onClick={() => openEditUser(index)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="admin-delete-btn"
                              onClick={() => deleteUser(index)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* RECIPE MANAGEMENT */}
        <section className="admin-section">
          <div className="admin-section-heading">
            <div>
              <span className="admin-section-tag">RECIPE MANAGEMENT</span>
              <h2>Recipe Management</h2>
            </div>
          </div>

          <div className="admin-table-card">
            <div className="table-responsive">
              <table className="table admin-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Resep</th>
                    <th>Kategori</th>
                    <th>Metode</th>
                    <th>Sumber</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {recipes.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No recipes available.
                      </td>
                    </tr>
                  ) : (
                    recipes.map((recipe, index) => (
                      <tr key={recipe.id}>
                        <td>{index + 1}</td>
                        <td>{recipe.title}</td>
                        <td>{recipe.category}</td>
                        <td>{recipe.method}</td>
                        <td>{recipe.source ?? "-"}</td>
                        <td>
                          <div className="admin-actions">
                            <button
                              type="button"
                              className="admin-primary-btn"
                              onClick={() => openEditRecipe(index)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="admin-delete-btn"
                              onClick={() => deleteRecipe(index)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* USER MODAL */}
      {userModalOpen && (
        <div
          className="admin-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setUserModalOpen(false);
          }}
        >
          <div
            className="modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="user-modal-title"
          >
            <div className="modal-content admin-modal">
              <div className="modal-header">
                <h5 className="modal-title" id="user-modal-title">
                  {editingUserIndex === null ? "Add User" : "Edit User"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setUserModalOpen(false)}
                />
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  saveUser();
                }}
              >
                <div className="modal-body">
                  <div className="admin-form-group">
                    <label htmlFor="user-name">Nama</label>
                    <input
                      type="text"
                      id="user-name"
                      className="form-control"
                      required
                      value={userForm.name}
                      onChange={(e) =>
                        setUserForm({ ...userForm, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="user-email">Email</label>
                    <input
                      type="email"
                      id="user-email"
                      className="form-control"
                      required
                      value={userForm.email}
                      onChange={(e) =>
                        setUserForm({ ...userForm, email: e.target.value })
                      }
                    />
                  </div>

                  {editingUserIndex === null && (
                    <div className="admin-form-group">
                      <label htmlFor="user-password">Password</label>
                      <input
                        type="password"
                        id="user-password"
                        className="form-control"
                        required
                        value={userForm.password ?? ""}
                        onChange={(e) =>
                          setUserForm({ ...userForm, password: e.target.value })
                        }
                      />
                    </div>
                  )}

                  <div className="admin-form-group">
                    <label htmlFor="user-role">Role</label>
                    <select
                      id="user-role"
                      className="form-select"
                      value={userForm.role}
                      onChange={(e) =>
                        setUserForm({
                          ...userForm,
                          role: e.target.value as User["role"],
                        })
                      }
                    >
                      <option value="USER">User</option>
                      <option value="ADMIN">Admin</option>
                      <option value="MODERATOR">Moderator</option>
                    </select>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="admin-cancel-btn"
                    onClick={() => setUserModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="admin-primary-btn">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* RECIPE MODAL */}
      {recipeModalOpen && (
        <div
          className="admin-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setRecipeModalOpen(false);
          }}
        >
          <div
            className="modal-dialog modal-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="recipe-modal-title"
          >
            <div className="modal-content admin-modal">
              <div className="modal-header">
                <h5 className="modal-title" id="recipe-modal-title">
                  Edit Recipe
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setRecipeModalOpen(false)}
                />
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  saveRecipe();
                }}
              >
                <div className="modal-body">
                  <div className="admin-form-group">
                    <label htmlFor="recipe-title">Recipe Title</label>
                    <input
                      id="recipe-title"
                      type="text"
                      className="form-control"
                      required
                      value={recipeForm.title}
                      onChange={(e) =>
                        setRecipeForm({ ...recipeForm, title: e.target.value })
                      }
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="admin-form-group">
                        <label htmlFor="recipe-category">Category</label>
                        <select
                          id="recipe-category"
                          className="form-select"
                          value={recipeForm.category}
                          onChange={(e) =>
                            setRecipeForm({
                              ...recipeForm,
                              category: e.target.value as Recipe["category"],
                            })
                          }
                        >
                          <option value="SUNDA">Sunda</option>
                          <option value="SOLO">Solo</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="admin-form-group">
                        <label htmlFor="recipe-method">Method</label>
                        <select
                          id="recipe-method"
                          className="form-select"
                          value={recipeForm.method}
                          onChange={(e) =>
                            setRecipeForm({
                              ...recipeForm,
                              method: e.target.value as Recipe["method"],
                            })
                          }
                        >
                          <option value="RICECOOKER">Rice Cooker</option>
                          <option value="TRADISIONAL">Traditional</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="recipe-duration">Duration (minutes)</label>
                    <input
                      id="recipe-duration"
                      type="number"
                      min={1}
                      className="form-control"
                      required
                      value={recipeForm.duration}
                      onChange={(e) =>
                        setRecipeForm({
                          ...recipeForm,
                          duration: Number(e.target.value),
                        })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="recipe-serving">Servings</label>
                    <input
                      id="recipe-serving"
                      type="number"
                      min={1}
                      className="form-control"
                      required
                      value={recipeForm.serving}
                      onChange={(e) =>
                        setRecipeForm({
                          ...recipeForm,
                          serving: Number(e.target.value),
                        })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="recipe-source">Source</label>
                    <input
                      id="recipe-source"
                      type="text"
                      className="form-control"
                      value={recipeForm.source ?? ""}
                      onChange={(e) =>
                        setRecipeForm({ ...recipeForm, source: e.target.value })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="recipe-description">Description</label>
                    <textarea
                      id="recipe-description"
                      className="form-control"
                      rows={4}
                      required
                      value={recipeForm.description}
                      onChange={(e) =>
                        setRecipeForm({
                          ...recipeForm,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="admin-cancel-btn"
                    onClick={() => setRecipeModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="admin-primary-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <footer id="footer" />
    </>
  );
}