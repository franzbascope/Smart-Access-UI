import React from "react";
import { Form } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { mainAction } from "../../../store/actions/main_action";
import { save, update, get } from "../../../store/actions/company";
import WithLoading from "../../loaderHoc";
import CompanyForm from "../components/companyForm";
const CompanyFormWithLoading = WithLoading(CompanyForm);

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    alert("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    alert("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class AdvancedSearchForm extends React.Component {
  state = {
    posx: null,
    posy: null
  };

  handleSubmit = e => {
    const company_id = this.props.company ? this.props.company.id : 0;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let company = {
          ...values,
          id: company_id
        };
        if (this.state.posx != null) {
          company.posx = this.state.posx;
          company.posy = this.state.posy;
        }
        this.props.mainAction(update(company));
      }
    });
  };

  addMarker = position => {
    this.setState({
      posx: position.lat(),
      posy: position.lng()
    });
  };

  async componentDidMount() {
    if (this.props.user.company_id) {
      await this.props.mainAction(get(this.props.user.company_id));
      const { posx, posy } = this.props.company;
      this.setState({
        posx,
        posy
      });
    }
  }

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { imageUrl } = this.state;
    return (
      <CompanyFormWithLoading
        form={this.props.company}
        addMarker={this.addMarker}
        posx={this.state.posx}
        posy={this.state.posy}
        loading={this.props.loading}
        error={this.props.error}
        success={this.props.success}
        imageloading={this.state.loading}
        imageUrl={imageUrl}
        beforeUpload={beforeUpload}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        getFieldDecorator={getFieldDecorator}
      />
    );
  }
}

const WrappedAdvancedSearchForm = Form.create({ name: "advanced_search" })(
  AdvancedSearchForm
);

const mapStateToProps = state => ({
  user: state.UserReducer.user,
  company: state.CompanyReducer.company,
  loading: state.CompanyReducer.loading,
  error: state.CompanyReducer.error,
  success: state.CompanyReducer.success
});

const mapDispatchToProps = dispatch => ({
  mainAction: bindActionCreators(mainAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedAdvancedSearchForm);
