import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {articles: state.articles, badWord: state.badWord};
};

const ConnectedList = ({articles, badWord}) => (
    <div>
        <ul className={"list-group list-group-flush"} >
            {articles.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.title}
                </li>
            ))}
        </ul>
        {badWord > 0 && alert("Bad word!!!")}
    </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;