import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { test } from "https://deno.land/std/testing/mod.ts";

test({
  name: "HomeResource - GET /",
  async fn(): Promise<any> {
    let response = await fetch("http://localhost:1447", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), "Welcome home!");
  }
});

test({
  name: "UsersResource - GET /users/1",
  async fn(): Promise<any> {
    let response = await fetch("http://localhost:1447/users/1", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), "User #1 not found.");
  }
});

test({
  name: "UsersResource - GET /users/1388873",
  async fn(): Promise<any> {
    let response = await fetch("http://localhost:1447/users/1388873", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), {
      id: 1388873,
      name: "Seller",
    });
  }
});

test({
  name: "UsersResource - GET /users/1983765",
  async fn(): Promise<any> {
    let response = await fetch("http://localhost:1447/users/1983765", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), {
      id: 1983765,
      name: "Buyer",
    });
  }
});

test({
  name: "OrdersResource - GET /orders/1",
  async fn(): Promise<any> {
    let response = await fetch("http://localhost:1447/orders/1", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), "Order #1 not found.");
  }
});

test({
  name: "OrdersResource - GET /orders/1090987",
  async fn(): Promise<any> {
    let response = await fetch("http://localhost:1447/orders/1090987", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), {
      id: 1090987,
      name: "Gadgets",
      quantity: 50,
      price: 1000
    });
  }
});

test({
  name: "OrdersResource - GET /orders/8878213",
  async fn(): Promise<any> {
    let response = await fetch("http://localhost:1447/orders/8878213", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), {
      id: 8878213,
      name: "Gizmos",
      quantity: 25,
      price: 2000
    });
  }
});
