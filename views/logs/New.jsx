import React from 'react';
import DefaultLayout from './layout/DefaultLayout';

function New() {
  const date = new Date();
  console.log('date');
  console.log(date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let today = `${month}/${day}/${year}`;
  return (
    <DefaultLayout>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>New View</h1>
        <h1>Log Entry</h1>
        <form action="/logs" method="POST">
          <label htmlFor="ttl">Title:</label>
          <br />
          <input type="text" id="ttl" name="title" />
          <br />
          <br />
          <label htmlFor="ety">Entry:</label>
          <br />
          <textarea id="ety" name="entry" />
          <br />
          <br />
          {/* <label htmlFor="sib">Ship is Broken:</label> */}
          {/* <input type="checkbox" id="sib" name="shipIsBroken" /> */}
          <input
            type="checkbox"
            id="shipIsBroken"
            name="shipIsBroken"
            value="shipIsBroken"
          ></input>{' '}
          <label htmlFor="shipIsBroken">Needs repair?</label>
          <br />
          <br />
          <label htmlFor="ts">Time Stamp:</label>
          <br />
          <input type="text" id="ts" name="ts" value={today} disabled />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default New;
