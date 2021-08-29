import React from 'react';
import { connect } from 'react-redux';

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//

const Smurf = (props)=> {
    const { smurf } = props;
    
    return(<div data-testid="smurf" className="card">
        <div className="card-body">
        <h3 className="card-title">{smurf.name}</h3>
            <hr/>
            <p className="card-text"><b>Position:</b> {smurf.position}</p>
            <p className="card-text"><b>Nickname:</b> {smurf.nickname}</p>
            <p className="card-text"><b>Description:</b> {smurf.description}</p>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return {
       name: state.name,
       position: state.position,
       nickname: state.nickname,
       description: state.description
    }
}

export default connect(mapStateToProps, {})(Smurf);