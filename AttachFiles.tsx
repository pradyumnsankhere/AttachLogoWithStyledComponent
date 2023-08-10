import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";
import React, { ChangeEvent, Component } from "react";

const MainBox = styled(Box)({
  maxWidth: "450px",
  padding: "20px",
});

const AttachTextField = styled(TextField)({
  marginTop: "20px",
  width: "100%",
});

const SaveButton = styled(Button)({
  marginTop: "30px",
  borderRadius: "10px",
  color: "balck",
  fontSize: "20px",
  alignItems: "center",
  background: "#7eff7e",
  padding: "15px 80px 15px 80px",
});
const HeadingBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alginItems: "center",
  padding: "5px",
});
const AttachLogoTypography = styled(Typography)({
  fontSize: "32px",
});
const ImageFromatTypography = styled(Typography)({
  marginTop: "15px",
  color: "grey",
  fontSize: "16px",
});
interface AttachFilesState {
    cvFile: File | null;
  }
export default class AttachFiles extends Component <{},AttachFilesState>{
    constructor(props :AttachFilesState) {
        super(props);
        this.state = {
          cvFile: null,
        };
      }
  cvInputRef = React.createRef<HTMLInputElement>();

  handleCVFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    this.setState({ cvFile: file });
  }

  handleSave=()=>{
    if (this.state.cvFile) {
        console.log("Attached File Name:", this.state.cvFile.name);
      } else {
        console.log("No file attached.");
      }
  }
  render() {
    return (
      <MainBox>
        <HeadingBox>
          <AttachLogoTypography>Attach Logo</AttachLogoTypography>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </HeadingBox>
        <AttachTextField
          variant="outlined"
          type="text"
          placeholder="Drag here from desktop or simple click and attach"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton component="span">
                  <AttachFile />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onClick={() => this.cvInputRef.current?.click()}
        ></AttachTextField>
        <input
          type="file"
          ref={this.cvInputRef}
          onChange={this.handleCVFileChange}
          style={{ display: "none" }}
          accept=".png, .jpg, .jpeg, .svg"
        />
        <ImageFromatTypography>.png, .jpg, .jpeg, .svg</ImageFromatTypography>
        <SaveButton onClick={this.handleSave}>Save</SaveButton>
      </MainBox>
    );
  }
}
