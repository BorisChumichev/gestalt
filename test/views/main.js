import React from 'react';
import ReactDOM from 'react-dom';
import 'gestalt/dist/gestalt.css';
// eslint-disable-next-line import/no-relative-parent-imports
import RenderConfig from '../renderConfig.js';

// Wait to mount until the test tells us to do so.
function mount() {
  const mountNode = document.getElementById('react-main-mount');
  const { Component } = RenderConfig[window.COMPONENT_NAME];
  ReactDOM.render(<Component {...window.COMPONENT_PROPS} />, mountNode);
}

if (window.COMPONENT_PROPS.deferMount) {
  window.addEventListener('trigger-mount', mount);
} else {
  mount();
}