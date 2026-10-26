
"use client";

import { useState } from "react";
import "./admin.css";

type User = {
  username: string;
  name: string;
  email: string;
  role: "user" | "admin";
};

type Recipe = {
  title: string;
  category: string;
  method: string;
  time: string;
  servings: string;
  source: string;
  description: string;
};

const initialUsers: User[] = [
  {
    username: "cath",
    name: "Cath",
    email: "cath@example.com",
    role: "admin",
  },
  {
    username: "user01",
    name: "Guest User",
    email: "user@example.com",
    role: "user",
  },
];

const initialRecipes: Recipe[] = [
  {
    title: "Nasi Liwet Sunda",
    category: "sunda",
    method: "rice-cooker",
    time: "45 minutes",
    servings: "4 portions",
    source: "Resep Nusantara",
    description: "Nasi gurih khas Sunda dengan berbagai rempah.",
  },
  {
    title: "Nasi Liwet Solo",
    category: "solo",
    method: "tradisional",
    time: "60 minutes",
    servings: "4 portions",
    source: "Resep Tradisional",
    description: "Nasi liwet khas Solo yang gurih dan harum.",
  },
];

const emptyUser: User = {
  username: "",
  name: "",
  email: "",
  role: "user",
};

const emptyRecipe: Recipe = {
  title: "",
  category: "sunda",
  method: "rice-cooker",
  time: "",
  servings: "",
  source: "",
  description: "",
};

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [recipes, setRecipes] =
    useState<Recipe[]>(initialRecipes);

  const [userModalOpen, setUserModalOpen] = useState(false);
  const [recipeModalOpen, setRecipeModalOpen] = useState(false);

  const [editingUserIndex, setEditingUserIndex] =
    useState<number | null>(null);
  const [editingRecipeIndex, setEditingRecipeIndex] =
    useState<number | null>(null);

  const [userForm, setUserForm] = useState<User>(emptyUser);
  const [recipeForm, setRecipeForm] =
    useState<Recipe>(emptyRecipe);

  function openAddUser() {
    setEditingUserIndex(null);
    setUserForm({ ...emptyUser });
    setUserModalOpen(true);
  }

  function openEditUser(index: number) {
    setEditingUserIndex(index);
    setUserForm({ ...users[index] });
    setUserModalOpen(true);
  }

  function saveUser() {
    if (
      !userForm.username.trim() ||
      !userForm.name.trim() ||
      !userForm.email.trim()
    ) {
      alert("Please fill in all user fields.");
      return;
    }

    const duplicate = users.some(
      (user, index) =>
        index !== editingUserIndex &&
        (user.username.toLowerCase() ===
          userForm.username.trim().toLowerCase() ||
          user.email.toLowerCase() ===
            userForm.email.trim().toLowerCase())
    );

    if (duplicate) {
      alert("Username or email already exists.");
      return;
    }

    const updatedUser = {
      ...userForm,
      username: userForm.username.trim(),
      name: userForm.name.trim(),
      email: userForm.email.trim(),
    };

    if (editingUserIndex !== null) {
      setUsers((current) =>
        current.map((user, index) =>
          index === editingUserIndex ? updatedUser : user
        )
      );
    } else {
      setUsers((current) => [...current, updatedUser]);
    }

    setUserModalOpen(false);
  }

  function deleteUser(index: number) {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    setUsers((current) =>
      current.filter((_, i) => i !== index)
    );
  }

  function openEditRecipe(index: number) {
    setEditingRecipeIndex(index);
    setRecipeForm({ ...recipes[index] });
    setRecipeModalOpen(true);
  }

  function saveRecipe() {
    if (
      !recipeForm.title.trim() ||
      !recipeForm.time.trim() ||
      !recipeForm.servings.trim() ||
      !recipeForm.source.trim() ||
      !recipeForm.description.trim()
    ) {
      alert("Please fill in all recipe fields.");
      return;
    }

    const updatedRecipe = {
      ...recipeForm,
      title: recipeForm.title.trim(),
    };

    if (editingRecipeIndex !== null) {
      setRecipes((current) =>
        current.map((recipe, index) =>
          index === editingRecipeIndex
            ? updatedRecipe
            : recipe
        )
      );
    }

    setRecipeModalOpen(false);
  }

  function deleteRecipe(index: number) {
    if (
      !window.confirm("Are you sure you want to delete this recipe?")
    ) {
      return;
    }

    setRecipes((current) =>
      current.filter((_, i) => i !== index)
    );
  }

  function seedDatabase() {
    if (
      !window.confirm(
        "Reset the dashboard to the initial sample data?"
      )
    ) {
      return;
    }

    setUsers(initialUsers.map((user) => ({ ...user })));
    setRecipes(initialRecipes.map((recipe) => ({ ...recipe })));
  }

  return (
    <>
      <header id="header" />

      <main className="admin-wrapper">
        <section className="admin-heading">
          <div>
            <span className="admin-heading-tag">
              ADMINISTRATOR
            </span>
            <h1>Admin Dashboard</h1>
            <p>
              Kelola user dan resep yang tersedia di Nasi Liwet
              Nusantara.
            </p>
          </div>

          <button
            className="home-primary-btn"
            id="seed-database-btn"
            style={{ border: "none" }}
            onClick={seedDatabase}
          >
            + Seed Database
          </button>
        </section>

        {/* USER MANAGEMENT */}
        <section className="admin-section">
          <div className="admin-section-heading">
            <div>
              <span className="admin-section-tag">
                USER MANAGEMENT
              </span>
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
                    <th>Username</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No users available.
                      </td>
                    </tr>
                  ) : (
                    users.map((user, index) => (
                      <tr key={user.username}>
                        <td>{index + 1}</td>
                        <td>{user.username}</td>
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
              <span className="admin-section-tag">
                RECIPE MANAGEMENT
              </span>
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
                      <tr key={`${recipe.title}-${index}`}>
                        <td>{index + 1}</td>
                        <td>{recipe.title}</td>
                        <td>{recipe.category}</td>
                        <td>{recipe.method}</td>
                        <td>{recipe.source}</td>
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
            if (event.target === event.currentTarget) {
              setUserModalOpen(false);
            }
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
                <h5
                  className="modal-title"
                  id="user-modal-title"
                >
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
                    <label htmlFor="user-username">Username</label>
                    <input
                      type="text"
                      id="user-username"
                      className="form-control"
                      required
                      value={userForm.username}
                      onChange={(event) =>
                        setUserForm({
                          ...userForm,
                          username: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="user-name">Nama</label>
                    <input
                      type="text"
                      id="user-name"
                      className="form-control"
                      required
                      value={userForm.name}
                      onChange={(event) =>
                        setUserForm({
                          ...userForm,
                          name: event.target.value,
                        })
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
                      onChange={(event) =>
                        setUserForm({
                          ...userForm,
                          email: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="user-role">Role</label>
                    <select
                      id="user-role"
                      className="form-select"
                      value={userForm.role}
                      onChange={(event) =>
                        setUserForm({
                          ...userForm,
                          role: event.target.value as User["role"],
                        })
                      }
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
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
                  <button
                    type="submit"
                    className="admin-primary-btn"
                  >
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
            if (event.target === event.currentTarget) {
              setRecipeModalOpen(false);
            }
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
                <h5
                  className="modal-title"
                  id="recipe-modal-title"
                >
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
                      onChange={(event) =>
                        setRecipeForm({
                          ...recipeForm,
                          title: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="admin-form-group">
                        <label htmlFor="recipe-category">
                          Category
                        </label>
                        <select
                          id="recipe-category"
                          className="form-select"
                          value={recipeForm.category}
                          onChange={(event) =>
                            setRecipeForm({
                              ...recipeForm,
                              category: event.target.value,
                            })
                          }
                        >
                          <option value="sunda">Sunda</option>
                          <option value="solo">Solo</option>
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
                          onChange={(event) =>
                            setRecipeForm({
                              ...recipeForm,
                              method: event.target.value,
                            })
                          }
                        >
                          <option value="rice-cooker">
                            Rice Cooker
                          </option>
                          <option value="tradisional">
                            Traditional
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="recipe-time">Time</label>
                    <input
                      id="recipe-time"
                      type="text"
                      className="form-control"
                      required
                      value={recipeForm.time}
                      onChange={(event) =>
                        setRecipeForm({
                          ...recipeForm,
                          time: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="recipe-servings">Portion</label>
                    <input
                      id="recipe-servings"
                      type="text"
                      className="form-control"
                      required
                      value={recipeForm.servings}
                      onChange={(event) =>
                        setRecipeForm({
                          ...recipeForm,
                          servings: event.target.value,
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
                      required
                      value={recipeForm.source}
                      onChange={(event) =>
                        setRecipeForm({
                          ...recipeForm,
                          source: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="admin-form-group">
                    <label htmlFor="recipe-description">
                      Description
                    </label>
                    <textarea
                      id="recipe-description"
                      className="form-control"
                      rows={4}
                      required
                      value={recipeForm.description}
                      onChange={(event) =>
                        setRecipeForm({
                          ...recipeForm,
                          description: event.target.value,
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
                  <button
                    type="submit"
                    className="admin-primary-btn"
                  >
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
