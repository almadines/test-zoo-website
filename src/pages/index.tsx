import * as React from "react";
import { Layout } from "../components/layout/layout";

class Home extends React.Component {
  render(): JSX.Element {
    return (
      <Layout>
        <h1 className="display-1">Main Page</h1>
      </Layout>
    );
  }
}

export default Home;