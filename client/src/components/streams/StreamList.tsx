import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

type JsxFnc = (props: any) => JSX.Element;
type Stream = { id: number; title: string; description: string };

const StreamList: JsxFnc = (props) => {
  useEffect(() => {
    props.fetchStreams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList(props)}</div>
    </div>
  );
};

const renderList = (props: { streams: Stream[] }) => {
  return props.streams.map((stream) => {
    return (
      <div className="item" key={stream.id}>
        <i className="large middle aligned icon camera"></i>
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    );
  });
};
const mapStateToProps = (state: any) => {
  return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
