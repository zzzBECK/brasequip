import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TransitioningOutlet = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="crossfade"
        timeout={300}
      >
        <div className="transition-wrapper">
          <Outlet />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitioningOutlet;
