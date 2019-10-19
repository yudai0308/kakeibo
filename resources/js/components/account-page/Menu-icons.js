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
        variant="secondary"
        className="rounded-circle ml-2"
        onClick={() => setShowChart(true)}
      >
        <i className="fas fa-calculator"></i>
      </Button>
      <Button
        size="sm"
        variant="secondary"
        className="rounded-circle ml-2"
        onClick={() => setShowFixedCost(true)}
      >
        <i className="fas fa-cog"></i>
      </Button>
    </div>
  )
}

export default MenuIcons;
