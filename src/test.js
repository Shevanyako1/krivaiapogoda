import React from 'react';
import axios from 'axios';

const API = 'https://developers.ria.com/auto/search?api_key=CHsylrKUZMxyd2OQ9CaynPWRUnu2QblXaB8cHdta&category_id=1';
const DEFAULT_QUERY = 'redux';

const withFetching = (url) => (Component) =>
  class WithFetching extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      axios.get(url)
        .then(result => this.setState({
          data: result.data,
          isLoading: false
        }))
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
    }

    render() {
      return <Component { ...this.props } { ...this.state } />;
    }
  }

const HigherOrderComponentApproach = ({ data, isLoading, error }) => {
  if (!data) {
    return <p>No data yet ...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <ul>
     
    </ul>
  );
}

export default withFetching(API + DEFAULT_QUERY)(HigherOrderComponentApproach);