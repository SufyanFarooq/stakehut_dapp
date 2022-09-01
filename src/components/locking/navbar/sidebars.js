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
  function help() {
    try {
      document.getElementById("contacts").scrollIntoView();
    } catch (error) {
      console.log("Error while connecting metamask", error);
    }
  }
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
      style={{
        position: "fixed",
        backgroundColor: "#222",
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

        <NavItem eventKey="withoutLocking" onClick={locking}>
          <NavIcon>
            <i
              className="fas fa-lock-open-alt"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Without Locking</NavText>
        </NavItem>
        <NavItem eventKey="help" onClick={help}>
          <NavIcon>
            <i class="far fa-question-circle" style={{ fontSize: "1.9em" }} />
          </NavIcon>
          <NavText>Help</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
export default Navbarr;
