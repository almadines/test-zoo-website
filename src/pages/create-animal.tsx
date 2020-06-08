import * as React from "react";
import { Layout } from "../components/layout/layout";
import AnimalCreate from "components/create-page/animal-create";

class AnimalCreatePage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <Layout>
        <AnimalCreate />
      </Layout>
    );
  }
}

export default AnimalCreatePage;
