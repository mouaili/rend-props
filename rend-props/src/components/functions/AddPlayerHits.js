import React from 'react';

const addPlayerHits = WrappedComponent => {
  // Un composant class
  class AddPlayerHits extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hits: 0,
        saiyan: true,
      };
    }

    handleAddOneHits = () => {
      this.setState(prevState => {
        return {
          hits: prevState.hits + 1,
        };
      });
    };
    render() {
      //   console.log(this.props);
      return (
        <WrappedComponent
          {...this.props}
          handleAddOneHits={this.handleAddOneHits}
          hocState={this.state}
        />
      );
    }
  }

  return AddPlayerHits;
};

export default addPlayerHits;
