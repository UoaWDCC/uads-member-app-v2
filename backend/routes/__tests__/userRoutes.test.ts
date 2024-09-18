import userRoutes from "../userRoutes";
import express from "express";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import User from "../../models/User";

let mongod: MongoMemoryServer;

const user1 = {
  name: "Harsheel",
  email: "hsin212",
  password: "password",
};

const user2 = {
  name: "Adi",
  email: "ashe194",
  password: "Password",
};

const user3 = {
  name: "Adi",
  email: "slie",
  password: "Password",
};

const users = [user1, user2, user3];

/**
 * Before all tests, create an in-memory MongoDB instance so we don't have to test on a real database,
 * then establish a mongoose connection to it.
 */
beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
});

/**
 * Before each test, intialize the database with some data
 */
beforeEach(async () => {
  await mongoose.connection.db.dropDatabase();
  const usersCollection = mongoose.connection.db.collection("users");
  await usersCollection.insertMany(users);
});

/**
 * After all tests, gracefully terminate the in-memory MongoDB instance and mongoose connection.
 */
afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});

const app = express();
app.use(express.json());
app.use("/", userRoutes);

describe("GET /", () => {
  it("should get all users", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("GET /email/:email", () => {
  it("should get a user by email", async () => {
    const email = "hsin212";
    const res = await request(app).get(`/email/${email}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Harsheel");
    expect(res.body.email).toBe("hsin212");
  });

  it("should return 404 when the user does not exist", async () => {
    const nonExistentEmail = "nonexistent@example.com";
    const res = await request(app).get(`/email/${nonExistentEmail}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("User not found");
  });
});

describe("GET /name/:name", () => {
  it("should get a user by name", async () => {
    const name = "Adi";
    const res = await request(app).get(`/name/${name}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Adi");
    expect(res.body.email).toBe("ashe194");
  });

  it("should return 404 when the user does not exist", async () => {
    const nonExistentName = "Kai";
    const res = await request(app).get(`/name/${nonExistentName}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("User not found");
  });
});

describe("POST /", () => {
  it("should create a new user", async () => {
    const newUser = {
      name: "Kai",
      email: "khir",
      password: "Password",
    };

    const res = await request(app).post("/").send(newUser);

    expect(res.status).toBe(201);
    expect(res.body.message).toBe("User created successfuly");

    // Verify user is created in the database
    const userInDb = await User.findOne({ email: newUser.email });
    expect(userInDb).toBeTruthy();
    expect(userInDb?.name).toBe(newUser?.name);
  });

  it("should return 400 if any field is missing", async () => {
    const incompleteUser = { name: "Kai", email: "khir" }; // Missing password

    const res = await request(app).post("/").send(incompleteUser);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("All fields are required.");
  });

  it("should return 409 if the user already exists", async () => {
    const takenUser = {
      name: "Kai",
      email: "hsin212", // Taken Email
      password: "Password",
    };

    const res = await request(app).post("/").send(takenUser);

    expect(res.status).toBe(409);
    expect(res.body.message).toBe("User already exists.");
  });
});

describe("PATCH /:id", () => {
  let userId: string;

  beforeEach(async () => {
    const user = await User.findOne({ email: user1.email });
    if (user) {
      userId = user._id.toString(); // Save the user ID for tests
    }
  });

  it("should update the user's name successfully", async () => {
    const newName = "New Harsheel";

    const res = await request(app).patch(`/${userId}`).send({ newName });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User name updated successfully");
    expect(res.body.user.name).toBe(newName);

    // Verify that the name is updated in the database
    const updatedUser = await User.findById(userId);
    expect(updatedUser).toBeTruthy();
    expect(updatedUser?.name).toBe(newName);
  });

  it("should return 404 if the user does not exist", async () => {
    const nonExistentUserId = "614c1b1f3f8a9e9b2c8b4567"; // Random but valid MongoDB ObjectId

    const res = await request(app).patch(`/${nonExistentUserId}`).send({ newName: "New Harsheel" });

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("User not found");
  });

  it("should return 400 if newName is not provided", async () => {
    const res = await request(app).patch(`/${userId}`).send({}); // No newName provided

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("New name is required");
  });
});

describe("DELETE /:id", () => {
  let userId: string;

  // Use pre-initialized users from the `beforeEach` block
  beforeEach(async () => {
    const user = await User.findOne({ email: user1.email });
    if (user) {
      userId = user._id.toString(); // Save the user ID for tests
    }
  });

  it("should delete the user successfully", async () => {
    const res = await request(app).delete(`/${userId}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User deleted successfully");

    // Verify that the user is no longer in the database
    const deletedUser = await User.findById(userId);
    expect(deletedUser).toBeNull();
  });

  it("should return 404 if the user does not exist", async () => {
    const nonExistentUserId = "614c1b1f3f8a9e9b2c8b4567"; // Random but valid MongoDB ObjectId

    const res = await request(app).delete(`/${nonExistentUserId}`);

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("User not found");
  });
});
