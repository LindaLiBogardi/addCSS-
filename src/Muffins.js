import React from 'react';

const Muffins =({muffins}) =>  {
    const muffinlist = muffins.map(muffin => {
    if (muffin.price>25){      
        return (
            <div className="muffin" key={muffin.id}>
              <div>Namen: {muffin.name}</div>
              <div>Price: {muffin.price}</div>
              <div>Size: {muffin.size} </div>
            </div>
        )
    } else {
        return null
    }
})
    
    return(
        <div className="muffin-list">
            {muffinlist}
        </div>
    )
}


export default Muffins