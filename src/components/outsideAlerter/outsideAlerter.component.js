import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, onOutsideClick) {

    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            onOutsideClick();
        }
    }

    useEffect(() => {
         // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

function OutsideAlerter({ children, onOutsideClick }) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, onOutsideClick);

    return <div ref={wrapperRef}>{children}</div>;
}

OutsideAlerter.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    onOutsideClick: PropTypes.func.isRequired,
};

export default OutsideAlerter;
