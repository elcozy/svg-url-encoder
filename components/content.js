import cx from "classnames";
// import globalStyles from "../styles/bootstrap.module.css";
import utilStyles from "../styles/utils.module.css";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      inputedSvg: "",
      // '<svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M30.3067 1.12869C31.9695 0.43479 33.7518 0.0776367 35.5516 0.0776367C37.3515 0.0776367 39.1338 0.43479 40.7966 1.12869C42.4591 1.82247 43.9696 2.83928 45.2418 4.12105C46.5145 5.4024 47.5248 6.9244 48.2137 8.59877C48.9026 10.2734 49.2573 12.0684 49.2573 13.8812C49.2573 15.6939 48.9026 17.4889 48.2137 19.1636C47.5247 20.8381 46.515 22.3595 45.2422 23.6409C45.2421 23.641 45.2423 23.6408 45.2422 23.6409L26.6078 42.4084C25.7846 43.2375 24.4499 43.2375 23.6266 42.4084L4.99223 23.6409C2.42213 21.0525 0.978271 17.5418 0.978271 13.8812C0.978271 10.2205 2.42213 6.70985 4.99223 4.1214C7.56232 1.53295 11.0481 0.0787721 14.6828 0.0787721C18.3174 0.0787721 21.8032 1.53295 24.3733 4.1214L25.1172 4.8706L25.8607 4.12175C25.8609 4.12163 25.8606 4.12187 25.8607 4.12175C27.1331 2.83982 28.6441 1.82253 30.3067 1.12869ZM35.5516 4.32368C34.3056 4.32368 33.0717 4.57094 31.9205 5.05134C30.7694 5.53173 29.7235 6.23584 28.8426 7.12345L26.6078 9.37421C25.7846 10.2033 24.4499 10.2033 23.6266 9.37421L21.3922 7.12381C19.6128 5.33164 17.1993 4.32482 14.6828 4.32482C12.1662 4.32482 9.75279 5.33164 7.97334 7.12381C6.19389 8.91597 5.1942 11.3467 5.1942 13.8812C5.1942 16.4157 6.19389 18.8464 7.97334 20.6385L25.1172 37.9048L42.2611 20.6385C43.1424 19.7513 43.8418 18.6976 44.3188 17.5382C44.7958 16.3788 45.0413 15.1361 45.0413 13.8812C45.0413 12.6262 44.7958 11.3835 44.3188 10.2241C43.8418 9.06473 43.1427 8.01135 42.2614 7.12416C41.3805 6.23655 40.3339 5.53173 39.1827 5.05134C38.0316 4.57094 36.7977 4.32368 35.5516 4.32368Z" fill="#6C6B6B"/></svg>',
      cssBackgroundImage: "",
      decodeAll: "",
      copySuccess: "",
      backgroundImage: "",
      copyButtonText: "click here to copy",
      fileContent: null,
    };
  }

  handleSvgChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState(
      {
        inputedSvg: value,
      },
      () => this.handleSvgChanges(value)
    );
  };
  handleSvgChanges = (value) => {
    console.log(`state: ${this.state.inputedSvg}, value: ${value}`);
    // const decodeAll = decodeURIComponent(encodeAll);

    const regex =
      "(xmlns=[\\'\"]https?:\\/\\/www.w3.org\\/2000\\/svg[\\'\"][^s])";
    // console.log(value.match(regex));

    if (!value.match(regex)) {
      //if input do not have the xlmns
      const xlmns = "<svg xmlns='http://www.w3.org/2000/svg'";
      value = value.replace(/<svg/g, xlmns);
    }
    // replacing double quotes to single quotes
    const replacedQuotes = value
      .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent)
      .replace(/"/g, `'`);
    const backgroundImage = `data:image/svg+xml,${replacedQuotes}`;
    if (replacedQuotes) {
      var cssBackgroundImage = `background-image: url("data:image/svg+xml,${replacedQuotes}")`;
    } else {
      var cssBackgroundImage = ``;
    }
    console.log(cssBackgroundImage);
    this.setState({
      cssBackgroundImage,
      backgroundImage,
    });
  };

  copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(this.state.cssBackgroundImage);
      this.setState({ copyButtonText: "Copied!" });
    } catch (err) {
      this.setState({ copyButtonText: "Failed to copy!" });
    }
    if (this.state.copyButtonText !== 'click here to copy"') {
      setTimeout(() => {
        this.setState(() => ({ copyButtonText: "click here to copy" }));
      }, 5000);
    }
  };
  handleFocus = (event) => event.target.select();

  handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (!file) return;
    this.setState({ selectedFile: file });

    const reader = new FileReader();
    reader.onload = this.handleFileLoad;
    reader.readAsText(file);
  };

  handleFileLoad = (event) => {
    console.log(event.target.result);
    //   getting the svg from  uploaded image
    const fileContent = event.target.result;
    this.setState({ fileContent: fileContent, inputedSvg: fileContent }, () =>
      this.handleSvgChanges(fileContent)
    );
    // this.refs.test.innerHTML = fileContent;
    // this.handleSvgChanges;
    console.log(this.state.inputedSvg);
  };

  render() {
    const {
      inputedSvg,
      cssBackgroundImage,
      decodeAll,
      backgroundImage,
      copyButtonText,
      fileContent,
    } = this.state;
    const { isLight, setIsLight } = this.props;
    // console.log(this.props);
    return (
      <>
        <div
          className="changeBackground"
          style={{
            width: 50,
            height: 50,
            borderRadius: 15,
            top: 12,
            left: 12,
            cursor: "pointer",
            position: "fixed",
            display: "flex",
            alignItems: "center",
            fontSize: `1.5rem`,
            justifyContent: "center",
            backgroundColor: `${isLight ? "black" : "white"}`,
          }}
          onClick={() => setIsLight(!isLight)}
        >
          {isLight ? "🌛" : "🌞"}
        </div>
        <div className="App container">
          {/* <h3 contentEditable="true">SVG to BACKGROUND IMAGE</h3> */}

          <h3 className="text-center">
            Encode svg image to use for CSS background
          </h3>
          <br />

          <div className="">
            <label htmlFor="exampleFormControlFile">
              Upload your svg file or paste the code below
            </label>
            <input
              type="file"
              accept=".svg"
              // value={selectedFile}
              onChange={this.handleFileInput}
              className={`${utilStyles["form-control-file"]} form-control-file`}
              id="exampleFormControlFile"
            />
            <style jsx global>{`
              body {
                background: ${isLight ? "white" : "black"};
                color: ${isLight ? "black" : "white"};
              }
              .form-control-file {
                background: ${isLight ? "white" : "black"};
                color: ${isLight ? "black" : "white"};
                width: min-content;
                font-size: 14px;
              }
              .form-control-file::-webkit-file-upload-button {
                color: ${isLight ? "white" : "black"};
                background: ${isLight ? "black" : "white"};
              }
            `}</style>
            {/* <pre id="fileContent">{fileContent}</pre> */}
            {/* <div ref="test">{fileContent}</div> */}
          </div>
          <h5>svg code:</h5>
          <textarea
            className="w-100 p-2 form-control"
            type="text"
            rows="10"
            value={inputedSvg}
            onChange={this.handleSvgChange}
            onFocus={this.handleFocus}
            placeholder="Paste SVG here"
          />

          <br />
          <div className={`position-relative d-flex flex-column flex-wrap`}>
            {inputedSvg ? (
              <div className={`position-relative `}>
                <h5>Background CSS:</h5>
                <div className={`position-relative ${utilStyles.textAreaCopy}`}>
                  <input
                    readOnly
                    className={`w-100 form-control`}
                    type="text"
                    //   rows="9"
                    value={cssBackgroundImage}
                    placeholder="Copy CSS backgroung image here"
                  />

                  {cssBackgroundImage ? (
                    <button
                      className={`btn btn-primary position-absolute ${utilStyles.button}`}
                      onClick={this.copyToClipBoard}
                    >
                      {copyButtonText}
                    </button>
                  ) : null}
                </div>
              </div>
            ) : null}
            <div className="">
              <h5 className={``}>Preview:</h5>
              <div
                className="w-100"
                style={{
                  height: 254,
                  // width: 256,
                  backgroundImage: `url("${backgroundImage}")`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "whitesmoke",
                }}
              >
                {decodeAll}
              </div>
            </div>
          </div>

          <br />
        </div>
      </>
    );
  }
}

export default Content;
