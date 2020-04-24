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

const getProjectName = async (id) => {
  let res = await axios.get(URL_BASE_API + "/project/" + id);
  return res.data.project_name;
};

export default class ProjectDetails extends React.Component {
  state = {
    id: cookie.get("project-id"),
    data: []
  }



  constructor() {
    super();
    console.log("from component");
    // console.log(this.state.data + " state")
  }


  async componentDidMount() {
    console.log("cookie id " + this.state.id)
    const response = await getProjectDetail(this.state.id +" - test")//await fetch(url,{mode: 'no-cors',method: 'post',body: JSON.stringify({"project": "3 - test"})})
    this.setState({ data: response.data });
    console.log(this.state.data)

  }

  render() {
    return (
      <div>
        <h1 style={{ marginTop: -10 }}>Project Detail: {this.state.name}</h1>
        {this.state.data.map(detail => <DetailItem number={detail.id} amount={detail.amount} />)}
      </div>
    )
  }
}