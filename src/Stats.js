import React from 'react';

function Stats(props) {
    return(
        <div className="stats">
          <div className="stats_title">Burgers</div>
          <div className="stats__count">{props.count}</div>
        </div>
    );
  }

  export default Stats;