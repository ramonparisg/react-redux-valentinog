import React, {Component} from 'react';
import {connect} from "react-redux";
import uuidv1 from 'uuid';
import { addArticleAction } from "../actions/AddArticleAction";



function mapDispatchToProps(dispatch){
    return {
        addArticle: article => dispatch(addArticleAction(article))
    }
}


class FormConnection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    render() {
        const {title} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        className="form-control"
                           id = "title"
                           value = {title}
                           onChange={this.handleChange}
                    />
                </div>
                <button type={"submit"} className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const {title} = this.state;
      const id = uuidv1();
      this.props.addArticle({title, id});
      this.setState({title: "" })
    }

}

const Form = connect(null, mapDispatchToProps)(FormConnection);

export default Form;