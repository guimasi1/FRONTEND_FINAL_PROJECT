import { useEffect } from "react";
import { getPhysiotherapists } from "../redux/actions/physiotherapistActions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import SinglePhysio from "./SinglePhysio";
const Physiotherapist = () => {
  const dispatch = useDispatch();
  const physiotherapists = useSelector(
    (state) => state.physiotherapists.physiotherapistsData.content
  );
  console.log(physiotherapists);
  useEffect(() => {
    dispatch(getPhysiotherapists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="my-5 border p-5 rounded-5 shadow-lg">
      <Row>
        <h1 className="mb-3">Our physiotherapists</h1>
        {physiotherapists &&
          physiotherapists.map((physio) => (
            <SinglePhysio physio={physio} key={physio.id} />
          ))}
      </Row>
    </Container>
  );
};

export default Physiotherapist;
