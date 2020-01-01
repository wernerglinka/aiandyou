/* global document */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "./modal";
import Fade from "./fade";

const BoardMember = ({ member }) => {
  const [thisModal, toggleThisModal] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (thisModal) {
      body.classList.add("modal-is-active");
    } else {
      body.classList.remove("modal-is-active");
    }
  }, [thisModal]);

  const handleClick = () => {
    toggleThisModal(!thisModal);
  };

  return (
    <div>
      <img src={member.image} alt={member.name} />
      <h3 className="name">{member.name}</h3>
      <p>{member.position}</p>
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleClick}
        onTouchStart={handleClick}
      >
        Read Bio
      </button>

      <Fade show={thisModal}>
        <Modal
          name={member.name}
          portrait={member.image}
          bio={member.bio}
          closeModal={handleClick}
        />
      </Fade>
    </div>
  );
};

BoardMember.propTypes = {
  member: PropTypes.shape().isRequired,
};

export default BoardMember;
