import React from 'react';
import axios from 'axios';
import DetailItem from './DetailItem';
import { URL_BASE_API } from "../../config";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const getProjectDetail = async (id) => {
  const res = await axios.post(`${URL_BASE_API}/image/statistic`, {
    project: id
  });

  return res;
};

export default class ProjectDetails extends React.Component {
  state = {
    id: cookie.get("project-id"),
    name: "",
    data: []
  }

  async componentDidMount() {
    this.setState({name: this.props.project_name});
    const response = await getProjectDetail(this.state.id +" - "+this.props.project_name);
    this.setState({ data: response.data });
  }

  render() {
    return (
      <div>
        <h1 style={{ marginTop: -10 }}>Project Detail: {this.state.name}</h1>
        {this.state.data.map(detail => <DetailItem key={detail.id} number={detail.id} amount={detail.amount} />)}
      </div>
    )
  }
}