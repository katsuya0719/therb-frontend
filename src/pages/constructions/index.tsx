import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import MaterialRepresentation from "src/components/MaterialRepresentation";
import { useRouter } from "next/router";
import { getConstructionDetails_API } from "src/api/construction/requests";
import { IConstructionDetail } from "src/models/construction";
import ConstructionListComponent from "src/components/construction-list";

const StyledPaperGeneral = styled(Paper)({
  elevation: 2,
  overflow: "hidden",
});

const StyledPaperAdd = styled(StyledPaperGeneral)({
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});

const StyledTypography = styled(Typography)({
  gutterBottom: true,
  color: "#707070",
});

const options = ["Delete"];
const ITEM_HEIGHT = 48;

export default function ConstructionList({
  constructionDetails,
}: {
  constructionDetails: IConstructionDetail[];
}): React.ReactElement {
  const router = useRouter();
  // const { t } = useTranslation();

  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = (event: React.MouseEvent<HTMLElement>) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   setAnchorEl(null);
  // };

  const addMaterial = (e: any) => {
    e.preventDefault();
    router.push("../constructions/new");
  };

  const viewMaterial = (id: string) => {
    router.push(`../constructions/${id}`);
  };

  return (
    <Box>
      <ConstructionListComponent
        constructionDetails={constructionDetails}
        addNew={addMaterial}
        viewDetail={viewMaterial}
      ></ConstructionListComponent>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <StyledPaperGeneral sx={{ height: "150px" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledTypography>{t("common:query-box")}</StyledTypography>
            </Box>
          </StyledPaperGeneral>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
          <StyledPaperAdd
            onClick={addMaterial}
            sx={{ height: "200px", maxHeight: "200px" }}
          >
            <StyledTypography>{t("common:add-new")}</StyledTypography>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderStyle: "solid",
                borderRadius: "50%",
                borderWidth: "1.5px",
                borderColor: "#707070",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AddIcon sx={{ color: "#707070", fontSize: 30 }}></AddIcon>
            </Box>
          </StyledPaperAdd>
        </Grid>
        {constructionDetails.map((cd) => (
          <Grid key={cd.id} item xs={6} sm={4} md={4} lg={3} xl={3}>
            <StyledPaperGeneral
              sx={{ height: "200px", position: "relative" }}
              onClick={(e) => {
                e.preventDefault();
                viewMaterial(cd.id);
              }}
            >
              <Box sx={{ position: "absolute", right: "10px" }}>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{ right: 0 }}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === "Pyxis"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  marginLeft: 1,
                  justifyContent: "right",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <StyledTypography>{cd.name}</StyledTypography>
                {cd.description && (
                  <StyledTypography variant="caption">
                    {cd.description}{" "}
                  </StyledTypography>
                )}
                {cd.description && (
                  <StyledTypography variant="caption">
                    {t("constructions:u-value")} {cd.uValue}W/m2K
                  </StyledTypography>
                )}
                <Box sx={{ width: 150, marginTop: 1 }}>
                  <MaterialRepresentation
                    materialHeights={cd.materials.map(
                      (l) =>
                        //parseFloat(l.thickness)
                        l.thickness
                    )}
                    length={200}
                  ></MaterialRepresentation>
                </Box>
              </Box>
            </StyledPaperGeneral>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}

export async function getServerSideProps() {
  const constructionDetails = await getConstructionDetails_API();
  return {
    props: { constructionDetails },
    // revalidate: 10, // In seconds
  };
}

// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const constructionDetails = await getConstructionDetails_API();
//   // Pass data to the page via props
//   return { props: { constructionDetails } };
// }
