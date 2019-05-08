import React, { Component } from 'react';
import Card from './components/Card/Card';

import { dataServices } from './services/dataServices';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    dataServices.fetchData().then(
      res => {
        this.setState({items: res.items})
      }
    )
  }

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-lg-center">
          {
            items.map((item, index) => {
              if (index === 0) return <Card key={index} className="col col-12 col-md-8 col-lg-6" data={item}/>
              return <Card key={index} className="col col-6 col-md-4 col-lg-3" data={item}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
