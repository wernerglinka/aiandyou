import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { FiX } from "react-icons/fi";
import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

/** convert a markdown string from a frontmatter field into an HTML string so it can be rendered */
function mdStringToHTML(mdString) {
  return remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(mdString)
    .toString();
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;
  background-color: #fff;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  padding: 70px 100px;
  margin: 0 auto;
  background-color: #fff;
  overflow: scroll;

  @media (max-width: 650px) {
    padding: 50px;
  }

  @media (max-width: 400px) {
    padding: 50px 15px;
  }

  .header {
    display: flex;
    justify-content: flex-start;

    @media (max-width: 600px) {
      display: block;
    }

    img {
      display: block;
      max-width: 160px;
      height: 160px;

      @media (max-width: 600px) {
        margin: 0 auto 40px;
      }
    }
  }
  .prose {
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 600px) {
      padding: 0;

      h3 {
        margin-top: 0;
      }
    }
  }
  .bio {
    padding-top: 50px;
    line-height: 1.625;
    text-align: left;

    @media (max-width: 600px) {
      padding: 0;
    }
  }
`;

const CloseModal = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
  }
`;

/** *******************************************************************************
 * Modal box for advisors, board members
 ******************************************************************************** */

const ModalTeam = ({ name, portrait, bio, closeModal }) => {
  return (
    <Overlay>
      <ModalContent>
        <CloseModal onClick={closeModal}>
          <FiX />
        </CloseModal>

        <div className="header">
          <img src={portrait} alt={name} />

          <div className="prose">
            <h3>{name}</h3>
          </div>
        </div>

        <div
          className="bio"
          dangerouslySetInnerHTML={{ __html: mdStringToHTML(bio) }}
        />
      </ModalContent>
    </Overlay>
  );
};

ModalTeam.propTypes = {
  name: PropTypes.string.isRequired,
  portrait: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalTeam;
