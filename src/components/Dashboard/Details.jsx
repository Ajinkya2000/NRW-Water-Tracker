import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// Components
import CustomPieChart from "../Charts/CustomPieChart";
import CustomLineChart from "../Charts/CustomLineChart";
import CustomBarChart from "../Charts/CustomBarChart";

const Details = ({
  isSidebarOpen,
  isDetailsOpen,
  closeSideBar,
  showDetails,
  showSidebar,
}) => {
  return (
    <div
      className={`detail--popup ${isSidebarOpen ? "show-sidebar" : ""}
        ${isDetailsOpen ? "show-details" : ""}`}
    >
      {isSidebarOpen && (
        <div className="card detail-card">
          <header className="card-header">
            <p className="card-header-title">Main Supply</p>
            <button
              className="card-header-icon"
              aria-label="close"
              onClick={closeSideBar}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faClose} />
              </span>
            </button>
          </header>
          <div className="card-content">
            <div className="content">
              <CustomPieChart />
            </div>
            <div className="content">
              <p>
                Supplying to{" "}
                <span className="has-text-weight-semibold">5 wards</span>
              </p>
              <p>
                Total Water Supplied:{" "}
                <span className="has-text-weight-semibold">5000 Ltr</span>
              </p>
              <p>
                Revenue Water:{" "}
                <span className="has-text-weight-semibold">4000 Ltr</span>
              </p>
              <p>
                Non Revenvue Water:{" "}
                <span className="has-text-weight-semibold">1000 Ltr</span>
              </p>
            </div>
          </div>
          <footer className="card-footer">
            <button onClick={showDetails} className="button card-footer-item">
              Detailed Analysis
            </button>
          </footer>
        </div>
      )}
      {isDetailsOpen && (
        <div className="card detail-card">
          <header className="card-header">
            <p className="card-header-title">Main Supply</p>
            <button
              className="card-header-icon"
              aria-label="close"
              onClick={closeSideBar}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faClose} />
              </span>
            </button>
          </header>
          <div className="card-content details-background">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-8">
                <article className="tile is-child box">
                  <p className="title">Monthly Analysis</p>
                  <p className="subtitle has-text-grey is-size-6">
                    Monthly non Nevenue Water Analysis
                  </p>
                  <div className="content">
                    <CustomLineChart />
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Details</p>
                  <div className="content">
                    <p>
                      Supplying to{" "}
                      <span className="has-text-weight-semibold">5 wards</span>
                    </p>
                    <p>
                      Total Water Supplied:{" "}
                      <span className="has-text-weight-semibold">5000 Ltr</span>
                    </p>
                    <p>
                      Revenue Water:{" "}
                      <span className="has-text-weight-semibold">4000 Ltr</span>
                    </p>
                    <p>
                      Non Revenvue Water:{" "}
                      <span className="has-text-weight-semibold">1000 Ltr</span>
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Water Revenue Details</p>
                  <div className="content">
                    <CustomPieChart />
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-8">
                <article className="tile is-child box">
                  <p className="title">Bar Graph</p>
                  <div className="content">
                    <CustomBarChart />
                  </div>
                </article>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <button onClick={showSidebar} className="button card-footer-item">
              Overview
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Details;
