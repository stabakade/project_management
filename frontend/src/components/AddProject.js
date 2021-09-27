import React, { Component } from 'react';
export default class AddProject extends Component {
	constructor(props){
		super(props);
		this.state = {
			project_name: '',
			project_description: '',
			project_link: '',
			tech_used: '',
			github: ''
		}

		// we are binding the methods defined to 'this'
		this.onChangeProjectName = this.onChangeProjectName.bind(this);
		this.onChangeProjectDescription = this.onChangeProjectDescription.bind(this);
		this.onChangeProjectLink = this.onChangeProjectLink.bind(this);
		this.onChangeTechUsed = this.onChangeTechUsed.bind(this);
		this.onChangeGithub = this.onChangeGithub.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeProjectName(event) {
        this.setState({
            project_name: event.target.value
        });
    }
    onChangeProjectDescription(event) {
        this.setState({
            project_description: event.target.value
        });
    }
    onChangeProjectLink(event) {
        this.setState({
            project_link: event.target.value
        });
    }
    onChangeTechUsed(event) {
        this.setState({
            tech_used: event.target.value
        });
    }
    onChangeGithub(event) {
        this.setState({
            github: event.target.value
        });
    }

    // method to handle the submit event which will be implemented to create a new project
    onSubmit(event) {
        event.preventDefault(); // just so that we could use the local component's state, because the backend is not implemented yet
        
        console.log(`Form submitted:`);
        console.log(`Project Name: ${this.state.project_name}`);
        console.log(`Project Description: ${this.state.project_description}`);
        console.log(`Project Link: ${this.state.project_link}`);
        console.log(`Tech Used: ${this.state.tech_used}`);
        console.log(`Github: ${this.state.github}`);
        
        this.setState({
            project_name: '',
            project_description: '',
            project_link: '',
            tech_used: '',
            github: ''
        })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Project</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Project Name </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.project_name}
                                onChange={this.onChangeProjectName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Project Description</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.project_description}
                                onChange={this.onChangeProjectDescription}
                                />
                    </div>
                    <div className="form-group">
                    	<label>Project Link</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.project_link}
                                onChange={this.onChangeProjectLink}
                                />
                    </div>
                    <div className="form-group">
                    	<label>Tech Used</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.tech_used}
                                onChange={this.onChangeTechUsed}
                                />
                    </div>
                    <div className="form-group">
                    	<label>Github URL</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.github}
                                onChange={this.onChangeGithub}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add the project!" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
};


