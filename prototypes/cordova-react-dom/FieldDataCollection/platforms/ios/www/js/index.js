const osmp2p = require('osm-p2p')
const ReactDOM = require('react-dom');
const React = require('react');

class App extends React.Component {
  constructor () {
    super();
    const osm = osmp2p('db');

    osm.create({ id: 'A', lat: 64.5, lon: -147.6 }, (err, key, node) => {
      if (err) return console.error(err);
      console.log('key', key, 'node', node);
      this.setState({ key: key, node: node });
    });
  }

  render () {
    console.log('**********************')
    console.log('render')
    console.log('this.state', this.state)
    console.log('**********************')

    if (this.state) {
      return <div>
        <p>key: {this.state.key}</p>
        <p>node: {JSON.stringify(this.state.node)}</p>
      </div>;
    }

    return <div></div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
