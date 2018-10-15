import React from "react";
import { connect } from "react-redux";
import { EditSecret } from "../actions/actions";

const mapStateToProps = state => {
  return {
    id: state.editId,
    item: state.secrets.filter(s => s._id === state.editId)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditSecret: secret => dispatch(EditSecret(secret))
  };
};

const Edit = props => {
  let newTitle;
  let newPrice;

  return (
    <div>
      {props.id}
      <input placeholder={props.item.title} ref={t => (newTitle = t)} />
      <input placeholder={props.item.price} ref={p => (newPrice = p)} />
      <button
        onClick={() => {
          props.onEditSecret({
            ...props.item,
            title: newTitle.value ? newTitle.value : props.item.title,
            price: parseInt(newPrice.value ? newPrice.value : props.item.price)
          });
          props.history.push("/secrets");
        }}
      >
        save
      </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
