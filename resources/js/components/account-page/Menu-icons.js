import React from "react";
import { Button } from "react-bootstrap";

function MenuIcons(props) {
  const {
    setShowFixedCost,
    setShowChart,
  } = props;

  return (
    <div>
      <Button
        size="sm"
        variant="info"
        className="rounded-pill ml-2"
        onClick={() => setShowChart({ switch: true, type: 1 })}
      >
        <i className="fas fa-tags"></i>
      </Button>
      <Button
        size="sm"
        variant="info"
        className="rounded-pill ml-2"
        onClick={() => setShowChart({ switch: true, type: 2 })}
      >
        <i className="fas fa-users"></i>
      </Button>
      <Button
        size="sm"
        variant="secondary"
        className="rounded-circle ml-2"
        onClick={() => setShowFixedCost(true)}
      >
        <i className="fas fa-calculator"></i>
      </Button>
    </div>
  )
}

export default MenuIcons;
