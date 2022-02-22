import React from 'react';

const Down: React.FC = () => (
  <svg width="3" height="50">
    <rect x="0" y="0" width="3" height="50" fill="gray" />
    <rect x="0" y="0" width="3" height="50" fill="white">
      <animate
        attributeType="XML"
        attributeName="y"
        from="0"
        to="50"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeType="XML"
        attributeName="height"
        from="10"
        to="40"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

export default Down;
