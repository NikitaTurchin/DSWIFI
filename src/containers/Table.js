import React from 'react';
import axios from 'axios';
import "./Table.css"

export default class Table extends React.Component {
  state = {
    config: [],
  }

  componentDidMount() {
    axios.post('msk-wifi-dhcp/api/getAllStaticIp', { page: '1', limit: '20' }) 
    .then((response) => { console.log(response); 
    const config = response.data.statics;
    this.setState({config}); }, 
        (error) => { console.log(error); });
  }

  render() {
    return (
      <div className="container">
        <h3>AllStaticIp Table</h3>
        <table className="table">
        <thead>
    <tr>
      <th scope="col">ip</th>
      <th scope="col">userid</th>
      <th scope="col">feature</th>
      <th scope="col">poolname</th>
    </tr>
  </thead>
  <tbody>
      {this.state.config.map(item => (
          <tr key={item.id}>
              <td>{item.ip}</td>
              <td>{item.userid}</td>
              <td>{item.feature}</td>
              <td>{item.poolname}</td>
          </tr>
      ))}
   </tbody>
        </table>
      </div>
    )
  }
}