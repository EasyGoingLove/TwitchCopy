import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";

const App: () => JSX.Element = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/streams/new" element={<StreamCreate />} />
            <Route path="/streams/edit" element={<StreamEdit />} />
            <Route path="/streams/delete" element={<StreamDelete />} />
            <Route path="/streams/show" element={<StreamShow />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
