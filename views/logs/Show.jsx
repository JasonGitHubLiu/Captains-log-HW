import React from 'react';
import DefaultLayout from './layout/DefaultLayout';

function Show(props) {
  return (
    <DefaultLayout>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Show View</h1>
        <p>
          {' '}
          <strong>Title: </strong> <strong>{props.log.title}</strong>{' '}
        </p>
        <p>
          <strong>Entry: </strong>
          {props.log.entry}
        </p>
        <p>
          {' '}
          <strong>Ship Status: </strong>{' '}
          {props.log.shipIsBroken ? 'Broken' : 'Working'}
        </p>
        <p>
          <strong>Time stamp: </strong>
          {props.log.ts}
        </p>
        <div className="d-flex mx-2">
          <a href={`/logs/${props.log._id}/edit`}>
            <button class="btn btn-outline-primary">Edit</button>
          </a>

          <br />
          <br />

          <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
            <button className="btn btn-outline-danger mx-3">Delete</button>
          </form>

          <br />

          <a href="/logs">
            <button className="btn btn-outline-dark">Back</button>
            <button type="button" class="btn btn-outline-danger">Danger</button>

          </a>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Show;
