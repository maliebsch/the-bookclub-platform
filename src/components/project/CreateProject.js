import React, { Component } from 'react';
import {connect} from 'react-redux';
import createProject from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {

    state= {
        title: '',
        content: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    }

    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id="title" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.onChangeHandler}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        auth: state.firebase.auth
    })
}
const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(CreateProject);


