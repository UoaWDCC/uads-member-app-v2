import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import User from "../User";
import { afterAll, beforeAll, beforeEach, expect, it } from "vitest";
import { describe } from "node:test";

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

describe("User Model", () => {
  it("find all the users", async () => {
    const users = await User.find();
    expect(users.length).toBe(3);
  });

  it("find a user by name", async () => {
    const foundUser = await User.findOne({ name: "Harsheel" });
    expect(foundUser?.name).toBe("Harsheel");
  });

  it("does not find user by invalid name", async () => {
    const user = await User.findOne({ name: "invalid" });
    expect(user).toBeNull();
  });

  it("find a user by email", async () => {
    const foundUser = await User.findOne({ email: "hsin212" });
    expect(foundUser?.email).toBe("hsin212");
  });

  it("does not find user by invalid email", async () => {
    const user = await User.findOne({ email: "invalid@email.com" });
    expect(user).toBeNull();
  });
});
