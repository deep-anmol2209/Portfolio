/**
 * @copyright 2025 avtarsingh
 * @license Apache-2.0
 */

// Node Modules

import PropTypes from "prop-types";

// Primary Button

function ButtonPrimary({ href, target = "_self", label, classes, imgSrc, download }) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary " + classes}
        download={download}
      >
        {label}
        <img src={imgSrc} />
      </a>
    );
  } else {
    return <button className={"btn btn-primary " + classes}></button>;
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  classes: PropTypes.string,
  imgSrc: PropTypes.string,
  downlaod: PropTypes.string,
};

// Outline Button

function ButtonOutline({ href, target = "", label, imgSrc, classes }) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
      >
        {label}
        <img src={imgSrc} />
      </a>
    );
  } else {
    return <button className={"btn btn-outline " + classes}></button>;
  }
}

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  classes: PropTypes.string,
  imgSrc: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
