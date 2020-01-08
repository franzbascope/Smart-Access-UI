import React from "react";
import { Breadcrumb, Icon } from "antd";
import { mainAction } from "../../../store/actions/main_action";
import { save, update, get, deletes } from "../../../store/actions/meetings";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WithLoading from "../../loaderHoc";
import MeetingsTable from "../components/table";
const TableWithLoading = WithLoading(MeetingsTable);

class Meetings extends React.Component {
  componentDidMount() {
    this.props.mainAction(get());
  }

  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Link to="/">
            <Breadcrumb.Item>
              <Icon type="home" />
            </Breadcrumb.Item>
          </Link>
          <Link to="/meetings">
            <Breadcrumb.Item>
              <Icon type="usergroup-add" />
              <span>Reuniones</span>
            </Breadcrumb.Item>
          </Link>
        </Breadcrumb>
        <TableWithLoading
          loading={this.props.loading}
          error={this.props.error}
          success={this.props.success}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.UserReducer.user,
  meetings: state.MeetingsReducer.company,
  loading: state.MeetingsReducer.loading,
  error: state.MeetingsReducer.error,
  success: state.MeetingsReducer.success
});

const mapDispatchToProps = dispatch => ({
  mainAction: bindActionCreators(mainAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);
