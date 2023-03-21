import React from 'react';
import DefaultLayout from './layout/DefaultLayout';

function Edit(props) {
  return (
    <DefaultLayout>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Edit El Capitan's Log</h1>
        <form action={`/logs/${props.log._id}?_method=PUT`} method="POST">
          <label htmlFor="ttl">Title</label> <br />
          <input type="text" id="ttl" name="title" value={props.log.title} />
          <br />
          <br />
          <label htmlFor="ety">Entry</label>
          <br />
          <input type="text" id="ety" name="entry" value={props.log.entry} />
          <br />
          <br />
          <div className="d-flex">
            <input
              className="mx-3"
              type="checkbox"
              id="shipIsBroken"
              name="repair"
              defaultChecked={props.log.shipIsBroken}
            />
            <label className="mx-1" htmlFor="shipIsBroken">
              Needs repair?
            </label>
          </div>
          <br />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex">
              <button className="btn btn-outline-success">Submit</button>
              <a href="/logs">
                <button className="btn btn-outline-dark mx-3">Back</button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Edit;
