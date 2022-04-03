import React from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import "../styles/index.css";
export default class TestApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <div>
        <Head>
          <title>peter shop</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </Head>
        <nav>
          {" "}
          <Link href="#">
            <a>Home</a>
          </Link>{" "}
          <Link href="/profile">
            <a>profile</a>
          </Link>{" "}
          <Link href="/edit">
            <a>Edit</a>
          </Link>
        </nav>
        <div className="index-content">
          <div className="container">
            <Component />
          </div>
        </div>
      </div>
    );
  }
}
