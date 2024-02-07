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
    <Container className="my-5 border p-5 rounded-5 shadow-lg position-relative ">
      <div className="fancy-border-radius p-0 top-0 start-0"></div>

      <Row>
        <div className="d-flex flex-column align-items-center">
          <h1 className="mb-5">Our physiotherapists</h1>
          <hr className="mb-5 w-75 border border-2 border-black" />
        </div>
        {physiotherapists &&
          physiotherapists.map((physio) => (
            <SinglePhysio physio={physio} key={physio.id} />
          ))}
      </Row>
    </Container>
  );
};

export default Physiotherapist;
