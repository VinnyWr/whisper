import React from "react";
import { connect } from "react-redux";
import { AddToCart, DeleteSecret, SetEditId } from "../actions/actions";

const mapStateToProps = state => {
  return {
    secrets: state.secrets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: secret => dispatch(AddToCart(secret)),
    onDeleteSecret: id => dispatch(DeleteSecret(id)),
    onSetEditId: id => dispatch(SetEditId(id))
  };
};

const Shop = props => (
  <div>
    <h1 className="cover-heading">Secrets..........</h1>
    <button
      className="btn btn-secondary"
      onClick={() => props.history.push("/create")}
    >
      new Secret
    </button>
    {props.secrets.map(s => (
      <div
        className="row d-flex justify-content-between form-group"
        key={s._id}
      >
        {s.title}
        <div>
          <button
            className="btn btn-default"
            onClick={() => props.onAddToCart(s)}
          >
            ${s.price}
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.onDeleteSecret(s._id)}
          >
            Redact
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              props.onSetEditId(s._id);
              props.history.push("/edit");
            }}
          >
            Edit
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
