import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { fetchStaticPage } from "../../../store/thunks/staticPage.thunks";
import Preloader from "../Preloader/Preloader.jsx";

const StaticPage = (props) => {
  const dispatch = useDispatch();
  const customId = useSelector((state) => state.staticPage.customId);
  const loading = useSelector((state) => state.staticPage.loading);
  const { page } = props;

  useEffect(() => {
    dispatch(fetchStaticPage(page));
  }, []);

  return loading ? (
    <Container>{parse(customId.htmlContent)}</Container>
  ) : (
    <Preloader />
  );
};

StaticPage.propTypes = {
  page: PropTypes.string,
};

export default StaticPage;
