import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MoreIcon from "@mui/icons-material/MoreVert";
import useFiltersStyles from "../../../app/pages/Filters/useFiltersStyles";
import {
  allCategoriesSelector,
  mainCategoriesSelector,
} from "../../../store/selectors/selectors";
import { setSelectedCategory } from "../../../store/actions/filters.actions";
import fetchCategories from "../../../store/thunks/catalog.thunks";

const CategoryFilter = () => {
  const classes = useFiltersStyles();

  const allCategories = useSelector(allCategoriesSelector);
  const categories = useSelector(mainCategoriesSelector);

  const [isOpenCategoriesFilter, setIsOpenCategoriesFilter] = useState(
    classes.isClosed
  );
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const categoriesList = categories.map(({ name }) => name);
  const process = (arr) => {
    const res = {};

    arr.forEach(({ parentId, name }) => {
      res[parentId] ??= { parentId, sub: [] };
      res[parentId].sub.push(name);
    });
    return Object.values(res).map(({ parentId, sub }) => ({
      parentId,
      name: sub,
    }));
  };

  const result = process(allCategories);

  const parentsListWithChildren = result.filter((e) => e.parentId !== "null");

  const subCategories = [];
  parentsListWithChildren.forEach((parentCategory) => {
    subCategories.push(parentCategory.name[0]);
    subCategories.push(parentCategory.name[1]);
  });

  const mixCategories = subCategories.filter(
    (subCategory) => subCategory.indexOf("mix") > -1
  );

  const filterBy = (a, b) =>
    a.filter((e) => !b.find((item) => item.parentId === e) && e);

  const parentsListWithoutChildren = filterBy(
    categoriesList,
    parentsListWithChildren
  );

  const toggleCategoriesFilter = () => {
    if (isOpenCategoriesFilter === classes.isClosed) {
      setIsOpenCategoriesFilter(classes.isOpen);
    } else {
      setIsOpenCategoriesFilter(classes.isClosed);
    }
  };

  const showCategoriesDropdown = (e) => {
    const { id } = e.target;
    return setCategoriesDropdownOpen(
      (prevState) => (id !== prevState && id) || null
    );
  };

  const handleCategoryFilter = (category) => {
    if (category === "all") {
      dispatch(setSelectedCategory([]));
    } else if (category === "bundles") {
      dispatch(setSelectedCategory(mixCategories));
    } else {
      dispatch(setSelectedCategory(category));
    }
  };

  return (
    <Container className={classes.filterContainer}>
      <Container>
        <Typography variant="h5" className={classes.filterTitle}>
          Seeds categories
        </Typography>
        <MoreIcon
          className={classes.moreIcon}
          onClick={toggleCategoriesFilter}
        ></MoreIcon>
      </Container>

      <Stack className={isOpenCategoriesFilter}>
        {parentsListWithoutChildren?.map((category) => (
          <Container key={category}>
            <Container className={classes.categoriesContainer}>
              <Typography
                className={classes.superCategoryTitle}
                variant="h6"
                onClick={() => {
                  handleCategoryFilter(category);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>
            </Container>
          </Container>
        ))}
        {parentsListWithChildren.map((categoryWithSubs) => (
          <Container key={categoryWithSubs.parentId}>
            <Container className={classes.categoriesContainer}>
              <Typography
                className={classes.superCategoryTitle}
                variant="h6"
                id={categoryWithSubs.parentId}
                onClick={showCategoriesDropdown}
              >
                {categoryWithSubs.parentId.charAt(0).toUpperCase() +
                  categoryWithSubs.parentId.slice(1)}
              </Typography>
              {categoriesDropdownOpen !== categoryWithSubs.parentId ? (
                <ExpandMoreIcon
                  id={categoryWithSubs.parentId}
                  className={classes.expandIcon}
                  onClick={showCategoriesDropdown}
                />
              ) : (
                <ExpandLessIcon
                  className={classes.expandIcon}
                  onClick={showCategoriesDropdown}
                />
              )}
            </Container>
            {categoriesDropdownOpen === categoryWithSubs.parentId && (
              <Container>
                <Stack>
                  <Typography
                    className={classes.subCategoriesTitle}
                    variant="p"
                    onClick={() => {
                      handleCategoryFilter(categoryWithSubs.name[0]);
                    }}
                  >
                    {categoryWithSubs.name[0].charAt(0).toUpperCase() +
                      categoryWithSubs.name[0].slice(1)}
                  </Typography>
                  <Typography
                    className={classes.subCategoriesTitle}
                    variant="p"
                    onClick={() => {
                      handleCategoryFilter(categoryWithSubs.name[1]);
                    }}
                  >
                    {categoryWithSubs.name[1].charAt(0).toUpperCase() +
                      categoryWithSubs.name[1].slice(1)}
                  </Typography>
                </Stack>
              </Container>
            )}
          </Container>
        ))}
      </Stack>
    </Container>
  );
};

export default CategoryFilter;
