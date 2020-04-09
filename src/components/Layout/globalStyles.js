import { css } from "@emotion/core"

const globalStyles = css`
  html {
    height: 0;
    line-height: 1.6;
  }
  body {
    height: 0;
    overflow: hidden;
  }
  .leaflet-pane {
    z-index: 9999999;
    position: absolute;
    top: 0;
    left: 0;
  }
  .leaflet-popup {
    position: absolute;
    text-align: center;
    margin-bottom: 20px;
    pointer-events: none;
  }
  .leaflet-popup-content-wrapper {
    padding: 1px;
    text-align: left;
    border-radius: 0.5rem;
  }
  .leaflet-popup-tip-container {
    width: 40px;
    height: 20px;
    position: absolute;
    left: 50%;
    margin-left: -20px;
    overflow: hidden;
    pointer-events: none;
  }
  .leaflet-popup-tip {
    width: 17px;
    height: 17px;
    padding: 1px;

    margin: -10px auto 0;

    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    background: white;
    color: #333;
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
  }
  .leaflet-container a.leaflet-popup-close-button {
    display: none;
    pointer-events: all;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.625rem 1.25rem 0 0;
    border: none;
    text-align: center;
    width: 18px;
    height: 14px;
    font: 16px/14px Tahoma, Verdana, sans-serif;
    color: #9b9da2;
    text-decoration: none;
    font-weight: bold;
    background: transparent;
  }
  .leaflet-container a.leaflet-popup-close-button:hover {
    color: #999;
  }
  .leaflet-popup-scrolled {
    overflow: auto;
    border-bottom: 1px solid #9b9da2;
    border-top: 1px solid #9b9da2;
  }
  .tt-zip-code-title {
    font-weight: 700;
    font-size: 0.75rem;
    color: #9b9da2;
  }
  .tt-zip-code-value {
    font-weight: 700;
    min-width: 12rem;
  }
  .tt-median-rent-title {
    color: #9b9da2;
    font-weight: 700;
    font-size: 0.75rem;
    padding: 0.75rem 0.75rem 0 0.75rem;
  }
  .tt-median-rent-value {
    font-size: 1.25rem;
    font-weight: 700;
    padding: 0 0.75rem 0.75rem 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tt-address {
    padding: 0.75rem;
    border-bottom: 0.0625rem solid;
    border-color: #ebebec;
  }
  .tt-percentage-difference {
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }
  .hide {
    display: none;
  }
`

export default globalStyles
