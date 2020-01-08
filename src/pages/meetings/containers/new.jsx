import React from "react";
import { Breadcrumb, Icon } from "antd";
import { mainAction } from "../../../store/actions/main_action";
import { save, update, get, deletes } from "../../../store/actions/meetings";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WithLoading from "../../loaderHoc";
import MeetingForm from "../components/meetingForm";

class NewMeetingContainer extends React.Component {
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
          <Link to="/meetings/new">
            <Breadcrumb.Item>
              <Icon type="plus" />
              <span>Nueva reunión</span>
            </Breadcrumb.Item>
          </Link>
        </Breadcrumb>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <MeetingForm
            loading={this.props.loading}
            error={this.props.error}
            success={this.props.success}
          />
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMeetingContainer);
