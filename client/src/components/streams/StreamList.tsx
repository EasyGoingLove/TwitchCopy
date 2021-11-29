import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

type JsxFnc = (props: any) => JSX.Element;
type Stream = {
  id: number;
  title: string;
  description: string;
  userId: string;
};

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

const renderAdmin = (stream: Stream, props: any) => {
  if (stream.userId === props.userId) {
    return (
      <div className="right floated content">
        <button className="ui button primary">Edit</button>
        <button className="ui button negative">Delete</button>
      </div>
    );
  }
};

const renderList = (props: { streams: Stream[] }) => {
  return props.streams.map((stream) => {
    return (
      <div className="item" key={stream.id}>
        {renderAdmin(stream, props)}
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
  return { streams: Object.values(state.streams), userId: state.auth.userId };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
