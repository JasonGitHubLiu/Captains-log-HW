import React from 'react';
import DefaultLayout from './layout/DefaultLayout';
// import DefaultLayout from '../layouts/DefaultLayout';

function Index(props) {
  console.log(props);
  return (
    // <DefaultLayout title="Index View">
    <DefaultLayout>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Index View</h1>
        <div className="d-flex">
          <a href="/logs/new" className="mx-3">
            <button type="button" class="btn btn-outline-primary">
              Add
            </button>
          </a>

          <br />
          <br />

          <form action="/logs/clear?_method=DELETE" method="POST">
            <button className="btn btn-outline-danger">CLEAR</button>
          </form>
        </div>
        <ul>
          {props.logs.map((logs, index) => (
            <div className="my-3">
              {' '}
              <div class="card" style={{ width: '18rem' }}>
                <div class="card-body">
                  <a href={`/logs/${logs._id}`}>
                    <h5 class="card-title">{logs.title}</h5>
                  </a>
                  <p>
                    Ship Status:
                    {logs.shipIsBroken ? (
                      <span class="badge text-bg-success mx-2">Excellent</span>
                    ) : (
                      <span class="badge text-bg-danger mx-2">Damaged</span>
                    )}
                  </p>
                </div>
              </div>
              {/* <li key={index}>
                <a href={`/logs/${logs._id}`}>
                  <strong>{logs.title}</strong>{' '}
                </a>
              </li> */}
            </div>
          ))}
        </ul>
        <div className="d-flex">
          <a href="/logs/new" className="mx-3">
            <button type="button" class="btn btn-outline-primary">
              Add
            </button>
          </a>

          <br />
          <br />

          {/* <form action="/logs/seed" method="POST">
          <button>SEED</button>
        </form> */}

          <br />

          <form action="/logs/clear?_method=DELETE" method="POST">
            <button className="btn btn-outline-danger">CLEAR</button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Index;
