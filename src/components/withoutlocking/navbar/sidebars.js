import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Navbarr() {
  let history = useHistory();

  function home() {
    history.push("/");
  }
  function locking() {
    history.push("/locking");
  }
  function withoutlocking() {
    history.push("/without");
  }
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" onClick={home}>
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="Locking" onClick={locking}>
          <NavIcon>
            <i className="fas fa-lock-alt" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Locking</NavText>
        </NavItem>
        <NavItem eventKey="withoutLocking" onClick={withoutlocking}>
          <NavIcon>
            <i className="fas fa-cog" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Without Locking</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
export default Navbarr;
