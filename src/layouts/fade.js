import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const FadeContainer = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

/**
 * Fade
 * Component wrapper to fade components in/out when mounting/unmounting
 *
 * Fade is using css keyframes to fade a component in/out. It is using an internal
 * render state to control the fade-out by delaying the unmount until the
 * fade-out animation is completed.
 *
 */
const Fade = ({ show, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setRender(false);
    }
  };

  return (
    render && (
      <FadeContainer
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 0.5s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </FadeContainer>
    )
  );
};

export default Fade;

Fade.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.shape().isRequired,
};
