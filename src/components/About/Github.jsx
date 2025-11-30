import { Row } from "react-bootstrap";
import { GitHubCalendar } from "react-github-calendar";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Días que <strong className="purple">Programo</strong>
      </h1>
      <GitHubCalendar
        username="Paz-Santangelo"
        blockSize={15}
        blockMargin={5}
        theme={{
          dark: ["#161b22", "#4a2b5e", "#7a4696", "#a962ce", "#c084f5"],
        }}
        fontSize={16}
        className="github-calendar"
      />
    </Row>
  );
};

export default Github;
