import React, { Component} from 'react';

class Muffins extends Component {
    render (){
        const { muffins } = this.props;
        const muffinList=muffins.map(muffin => {        
        return (
            <div className="muffin" key={muffin.id}>
              <div>Price: {muffin.price}</div>
              <div>Size: {muffin.size} </div>
            </div>
        )
    })
    return(
        <div className="muffin-list">
            {muffinList}
        </div>
    )
  }
}

export default Muffins