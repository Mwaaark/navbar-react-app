import React from "react";
import { Route, Switch } from "react-router";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}
