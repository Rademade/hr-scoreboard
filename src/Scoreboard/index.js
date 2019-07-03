import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Title } from "../components/styled";
import { init } from "../state/reducer";

const Scoreboard = ({ init }) => {
  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <Title>Scoreboard</Title>
    </Container>
  );
};

const mapStateToProps = ({ app }) => ({ app });

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoreboard);
